import * as core from '@actions/core';
import { exec } from '@actions/exec';
import { ExecOptions } from '@actions/exec/lib/interfaces';
import Inputs from './inputs';

async function run() {
  core.debug(':: Loading input params');
  const inputs = new Inputs();

  const accountUrl = `${inputs.AwsAccountID}.dkr.ecr.${inputs.Region}.amazonaws.com`;

  // Configure AWS CLI
  awsConfigure(inputs);

  // Login to AWS ECR
  await awsEcrLogin(inputs);

  // Create ECR Repo
  await awsCreateEcrRepo(inputs);

  // Build the Dockerfile image
  await buildImage(inputs, accountUrl);

  // Deploy built image tags to AWS ECR
  await deployToEcr(inputs, accountUrl);
}

function awsConfigure(inputs: Inputs) {
  core.debug(':: Setting AWS credentials')
  core.exportVariable('AWS_ACCESS_KEY_ID', inputs.AccessKeyID);
  core.exportVariable('AWS_SECRET_ACCESS_KEY', inputs.SecretAccessKey);
  core.exportVariable('AWS_DEFAULT_REGION', inputs.Region);
}

async function awsEcrLogin(inputs: Inputs) {
  core.info('== LOGIN INTO AWS ECR ==')

  let loginCmd = '';
  let err = '';

  let opts: ExecOptions = {
    cwd: './',
    silent: true,
    listeners: {
      stdout: (data: Buffer) => {
        loginCmd += data.toString();
      },
      stderr: (data: Buffer) => {
        err += data.toString();
      }
    },
  }

  await exec(`aws ecr get-login --no-include-email --region ${inputs.Region}`, undefined, opts);
  if (err.length > 0) {
    throw new Error('Failed to retrieve docker login to AWS ECR. Perhaps the AWS credentials do not have the correct permission');
  }

  await exec(loginCmd, undefined, opts);

  core.info('== FINISHED LOGIN ==');
}

function getEcrRepoName(inputs: Inputs): string {
  if (inputs.EcrRepoName.length > 0) {
    return inputs.EcrRepoName;
  }

  // default
  return (process.env.GITHUB_REPOSITORY || '').toLocaleLowerCase()
}

function getEcrTags(accountUrl: string, repoName: string, inputTags: string): string[] {
  let tags = inputTags.split(',');
  const ecrTags: string[] = [];

  // Add the ref tag if code is a checked out release tag
  if ((process.env.GITHUB_REF || '').startsWith('refs/tags')) {
    const tag = (process.env.GITHUB_REF || '').split('/').pop();

    if (tag !== '' || tag !== undefined) {
      ecrTags.push(`${accountUrl}/${repoName}:${tag}`);
    }
  }

  // Build the tags
  for (const tag of tags) {
    ecrTags.push(`${accountUrl}/${repoName}:${tag}`);
  }

  return ecrTags
}

async function awsCreateEcrRepo(inputs: Inputs) {
  core.info('== CHECKING FOR ECR REPO ==');

  const repoName = getEcrRepoName(inputs);

  let output = '';
  let err = '';

  let opts: ExecOptions = {
    cwd: './',
    silent: true,
    listeners: {
      stdout: (data: Buffer) => {
        output += data.toString();
      },
      stderr: (data: Buffer) => {
        err += data.toString();
      }
    },
  }

  await exec(`aws ecr describe-repositories --repository-names "${repoName}"`, undefined, opts);

  if (err.length > 0) {
    // Repo doesn't exist or failed. Try creating...
    await exec(`aws ecr create-repository --repository-name ${repoName}`);
    core.info(`== CREATED ECR REPO [ ${repoName} ] ==`);
    return
  }

  core.info('== REPO FOUND ==')
}

async function buildImage(inputs: Inputs, accountUrl: string) {
  core.info('== BUILD IMAGE FROM DOCKERFILE ==');
  const repoName = getEcrRepoName(inputs);
  const ecrTags = getEcrTags(accountUrl, repoName, inputs.EcrTags);

  let tags = ecrTags.join(' -t ');

  if (tags.length > 0) {
    tags = `-t ${tags}`
  }


  await exec(`docker build ${inputs.DockerBuildArgs} -f ${inputs.DockerfilePath} ${tags} .`, undefined, {
    cwd: inputs.ProjectPath,
  });
  core.info('== FINISHED BUILDING IMAGE ==');
}

async function deployToEcr(inputs: Inputs, accountUrl: string) {
  core.info('== DEPLOYING TO ECR ==');
  core.debug(`:: ECR Account URL: ${accountUrl}`);

  const repoName = getEcrRepoName(inputs);
  const ecrTags = getEcrTags(accountUrl, repoName, inputs.EcrTags);

  for (const tag of ecrTags) {
    await exec(`docker push ${tag}`);
  }

  core.info('== FINISHED DEPLOYMENT ==');
}

try {
  run();
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}