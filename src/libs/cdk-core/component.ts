import { Construct } from "constructs";
import Constants from "./constants";
import createNamer, { Namer, ScopedName } from "./naming";
import { ComponentStack } from "./stack/component-stack";
import { StackInfo } from "./stack/stack-info";
import { AwsEnv, AwsEnvId, EnvInfo, ProjectConfig } from "./types";

export interface StackBuilder {
  env: EnvInfo;
  awsEnvId: AwsEnvId;
  stackName?: string;
  description?: string;
  build: (stack: ComponentStack) => void;
}

export interface ComponentConfig {
  name: string;
  stackBuilders: StackBuilder[];
}

export default class Component {
  constructor(
    private readonly parent: Construct,
    projectConfig: ProjectConfig,
    config: ComponentConfig
  ) {
    const namer = createNamer(projectConfig.projectName, config.name);
    const sharedContext = {
      projectName: projectConfig.projectName,
      componentName: config.name,
      namer,
    };

    config.stackBuilders.forEach((builder) => {
      const context = {
        ...sharedContext,
        envInfo: builder.env,
        stackInfo: this.createStackInfo(projectConfig, namer, builder),
      };
      const stack = new ComponentStack(this.parent, context);
      builder.build(stack);
    });
  }

  private createStackInfo(
    projectConfig: ProjectConfig,
    namer: Namer,
    builder: StackBuilder
  ): StackInfo {
    const name = this.createScopedStackName(
      namer,
      builder.env,
      builder.stackName
    );
    const awsEnv = this.getAwsEnv(projectConfig.accounts, builder.awsEnvId);
    return new StackInfo(name, awsEnv, projectConfig.tags, builder.description);
  }

  private createScopedStackName(
    namer: Namer,
    env: EnvInfo,
    stackName?: string
  ): ScopedName {
    const stackPrefix = stackName
      ? `${stackName}-${Constants.Stacks.Names.STACK_SUFFIX}`
      : Constants.Stacks.Names.STACK_SUFFIX;
    return namer.scopedName(stackPrefix, env.name);
  }

  private getAwsEnv(awsEnvs: AwsEnv[], awsEnvId: AwsEnvId): AwsEnv {
    const matchedEnvs = awsEnvs.filter((env) => env.id === awsEnvId);
    if (matchedEnvs.length == 0) {
      throw Error(
        `Aws env with id ${awsEnvId} referenced in config is not declared`
      );
    }
    return awsEnvs[0];
  }
}
