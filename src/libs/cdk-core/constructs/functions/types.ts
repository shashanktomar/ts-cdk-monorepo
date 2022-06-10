import { Duration } from "aws-cdk-lib";
import Defaults from "../../defaults";

export interface BaseFunctionProps {
  readonly name: string;
  readonly entry: string;
  readonly timeout?: Duration;
  readonly environment?: { [key: string]: string };
  readonly lambdaDlq?: {
    queueName?: string;
  };
}

export const baseFnDefaults = {
  timeout: Defaults.LAMBDA.TIMEOUT,
};
