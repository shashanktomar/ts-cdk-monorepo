import * as cdk from "aws-cdk-lib";
import Component, { ComponentConfig } from "cdk-core/component";
import SqsSourcedLambda from "cdk-core/constructs/functions/sqs-sourced-function";
import { ComponentStack } from "cdk-core/stack/component-stack";
import {
  DEV_SOUTHEAST_2_ID,
  envs,
  projectConfig,
} from "common-lib/infra/project-config";
import { join } from "path";
import "source-map-support/register";

const app = new cdk.App();

const devResources = (stack: ComponentStack) => {
  const lambdaOne = new SqsSourcedLambda(stack, stack.context, {
    name: "lambda-one",
    entry: join(__dirname, "lambda-one.ts"),
  });
};

const componentConfig: ComponentConfig = {
  name: "component-two",
  stackBuilders: [
    {
      env: envs.ENV_DEV,
      awsEnvId: DEV_SOUTHEAST_2_ID,
      build: devResources,
    },
    {
      env: envs.ENV_PROD,
      awsEnvId: DEV_SOUTHEAST_2_ID,
      build: (stack: ComponentStack) => {},
    },
  ],
};

new Component(app, projectConfig, componentConfig);
