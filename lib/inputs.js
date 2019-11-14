"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
require("reflect-metadata");
const decorators_1 = require("./decorators");
class Inputs {
    constructor() {
        // REQUIRED ARGUMENTS
        this.AwsAccountID = '';
        this.AccessKeyID = '';
        this.SecretAccessKey = '';
        this.Region = '';
        // OPTIONAL ARGUMENTS
        this.ShouldCreateRepo = '';
        this.DockerfilePath = '';
        this.DockerBuildArgs = '';
        this.ProjectPath = '.';
        this.EcrRepoName = '';
        this.EcrTags = '';
        this.loadRequired();
        this.loadOptional();
    }
    loadRequired() {
        const missingInputs = [];
        for (const prop of Object.keys(this)) {
            if (decorators_1.isRequired(this, prop)) {
                const inputName = decorators_1.getInputName(this, prop);
                const value = core.getInput(inputName);
                if (value.length === 0) {
                    missingInputs.push(inputName);
                }
                if (!Reflect.set(this, prop, value)) {
                    throw new Error(`Failed to set the value of [ ${inputName} ] during action setup`);
                }
            }
        }
        if (missingInputs.length > 0) {
            throw new Error(`Missing required inputs [ ${missingInputs.join(', ')} ]. Did you set using the 'with' property?`);
        }
    }
    loadOptional() {
        for (const prop of Object.keys(this)) {
            if (decorators_1.isOptional(this, prop)) {
                const inputName = decorators_1.getInputName(this, prop);
                const value = core.getInput(inputName);
                Reflect.set(this, prop, value);
            }
        }
    }
}
__decorate([
    decorators_1.Input('account_id'),
    decorators_1.Required,
    __metadata("design:type", String)
], Inputs.prototype, "AwsAccountID", void 0);
__decorate([
    decorators_1.Input('access_key_id'),
    decorators_1.Required,
    __metadata("design:type", String)
], Inputs.prototype, "AccessKeyID", void 0);
__decorate([
    decorators_1.Input('secret_access_key'),
    decorators_1.Required,
    __metadata("design:type", String)
], Inputs.prototype, "SecretAccessKey", void 0);
__decorate([
    decorators_1.Input('region'),
    decorators_1.Required,
    __metadata("design:type", String)
], Inputs.prototype, "Region", void 0);
__decorate([
    decorators_1.Input('create_repo'),
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "ShouldCreateRepo", void 0);
__decorate([
    decorators_1.Input('dockerfile'),
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "DockerfilePath", void 0);
__decorate([
    decorators_1.Input('docker_build_args'),
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "DockerBuildArgs", void 0);
__decorate([
    decorators_1.Input('path'),
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "ProjectPath", void 0);
__decorate([
    decorators_1.Input('repo'),
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "EcrRepoName", void 0);
__decorate([
    decorators_1.Input('tags') // comma-delimited string
    ,
    decorators_1.Optional,
    __metadata("design:type", String)
], Inputs.prototype, "EcrTags", void 0);
exports.default = Inputs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2lucHV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyw0QkFBMEI7QUFDMUIsNkNBQStGO0FBRS9GLE1BQXFCLE1BQU07SUE2Q3pCO1FBNUNBLHFCQUFxQjtRQUlMLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBSTFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSXpCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBSTdCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEMscUJBQXFCO1FBSUwscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBSTlCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBSTVCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBSTdCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBSTFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSXpCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztRQUVuQyxLQUFJLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXZDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3RCLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9CO2dCQUVELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLFNBQVMsd0JBQXdCLENBQUMsQ0FBQztpQkFDcEY7YUFDRjtTQUNGO1FBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ3BIO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixLQUFJLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBN0VDO0lBRkMsa0JBQUssQ0FBQyxZQUFZLENBQUM7SUFDbkIscUJBQVE7OzRDQUNpQztBQUkxQztJQUZDLGtCQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3RCLHFCQUFROzsyQ0FDZ0M7QUFJekM7SUFGQyxrQkFBSyxDQUFDLG1CQUFtQixDQUFDO0lBQzFCLHFCQUFROzsrQ0FDb0M7QUFJN0M7SUFGQyxrQkFBSyxDQUFDLFFBQVEsQ0FBQztJQUNmLHFCQUFROztzQ0FDMkI7QUFNcEM7SUFGQyxrQkFBSyxDQUFDLGFBQWEsQ0FBQztJQUNwQixxQkFBUTs7Z0RBQ3FDO0FBSTlDO0lBRkMsa0JBQUssQ0FBQyxZQUFZLENBQUM7SUFDbkIscUJBQVE7OzhDQUNtQztBQUk1QztJQUZDLGtCQUFLLENBQUMsbUJBQW1CLENBQUM7SUFDMUIscUJBQVE7OytDQUNvQztBQUk3QztJQUZDLGtCQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2IscUJBQVE7OzJDQUNpQztBQUkxQztJQUZDLGtCQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2IscUJBQVE7OzJDQUNnQztBQUl6QztJQUZDLGtCQUFLLENBQUMsTUFBTSxDQUFDLENBQUMseUJBQXlCOztJQUN2QyxxQkFBUTs7dUNBQzRCO0FBM0N2Qyx5QkFrRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb3JlIGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IGdldElucHV0TmFtZSwgSW5wdXQsIGlzT3B0aW9uYWwsIGlzUmVxdWlyZWQsIE9wdGlvbmFsLCBSZXF1aXJlZCB9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0cyB7XG4gIC8vIFJFUVVJUkVEIEFSR1VNRU5UU1xuXG4gIEBJbnB1dCgnYWNjb3VudF9pZCcpXG4gIEBSZXF1aXJlZFxuICBwdWJsaWMgcmVhZG9ubHkgQXdzQWNjb3VudElEOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoJ2FjY2Vzc19rZXlfaWQnKVxuICBAUmVxdWlyZWRcbiAgcHVibGljIHJlYWRvbmx5IEFjY2Vzc0tleUlEOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoJ3NlY3JldF9hY2Nlc3Nfa2V5JylcbiAgQFJlcXVpcmVkXG4gIHB1YmxpYyByZWFkb25seSBTZWNyZXRBY2Nlc3NLZXk6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgncmVnaW9uJylcbiAgQFJlcXVpcmVkXG4gIHB1YmxpYyByZWFkb25seSBSZWdpb246IHN0cmluZyA9ICcnO1xuXG4gIC8vIE9QVElPTkFMIEFSR1VNRU5UU1xuXG4gIEBJbnB1dCgnY3JlYXRlX3JlcG8nKVxuICBAT3B0aW9uYWxcbiAgcHVibGljIHJlYWRvbmx5IFNob3VsZENyZWF0ZVJlcG86IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgnZG9ja2VyZmlsZScpXG4gIEBPcHRpb25hbFxuICBwdWJsaWMgcmVhZG9ubHkgRG9ja2VyZmlsZVBhdGg6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgnZG9ja2VyX2J1aWxkX2FyZ3MnKVxuICBAT3B0aW9uYWxcbiAgcHVibGljIHJlYWRvbmx5IERvY2tlckJ1aWxkQXJnczogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCdwYXRoJylcbiAgQE9wdGlvbmFsXG4gIHB1YmxpYyByZWFkb25seSBQcm9qZWN0UGF0aDogc3RyaW5nID0gJy4nO1xuXG4gIEBJbnB1dCgncmVwbycpXG4gIEBPcHRpb25hbFxuICBwdWJsaWMgcmVhZG9ubHkgRWNyUmVwb05hbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgndGFncycpIC8vIGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcbiAgQE9wdGlvbmFsXG4gIHB1YmxpYyByZWFkb25seSBFY3JUYWdzOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvYWRSZXF1aXJlZCgpO1xuICAgIHRoaXMubG9hZE9wdGlvbmFsKCk7XG4gIH1cblxuICBsb2FkUmVxdWlyZWQoKSB7XG4gICAgY29uc3QgbWlzc2luZ0lucHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGZvcihjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHRoaXMpKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCh0aGlzLCBwcm9wKSkge1xuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBnZXRJbnB1dE5hbWUodGhpcywgcHJvcCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29yZS5nZXRJbnB1dChpbnB1dE5hbWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBtaXNzaW5nSW5wdXRzLnB1c2goaW5wdXROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghUmVmbGVjdC5zZXQodGhpcywgcHJvcCwgdmFsdWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2V0IHRoZSB2YWx1ZSBvZiBbICR7aW5wdXROYW1lfSBdIGR1cmluZyBhY3Rpb24gc2V0dXBgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXNzaW5nSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyByZXF1aXJlZCBpbnB1dHMgWyAke21pc3NpbmdJbnB1dHMuam9pbignLCAnKX0gXS4gRGlkIHlvdSBzZXQgdXNpbmcgdGhlICd3aXRoJyBwcm9wZXJ0eT9gKTtcbiAgICB9XG4gIH1cblxuICBsb2FkT3B0aW9uYWwoKSB7XG4gICAgZm9yKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXModGhpcykpIHtcbiAgICAgIGlmIChpc09wdGlvbmFsKHRoaXMsIHByb3ApKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGdldElucHV0TmFtZSh0aGlzLCBwcm9wKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb3JlLmdldElucHV0KGlucHV0TmFtZSk7XG4gICAgICAgIFJlZmxlY3Quc2V0KHRoaXMsIHByb3AsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==