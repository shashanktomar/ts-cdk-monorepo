import { Duration } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import {
  NodejsFunction,
  NodejsFunctionProps,
} from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { Context } from "../../types";
import { BaseFunctionProps, baseFnDefaults } from "./types";
import Defaults from "../../defaults";
import { IQueue, Queue } from "aws-cdk-lib/aws-sqs";
import { SqsEventSource } from "aws-cdk-lib/aws-lambda-event-sources";

export interface SqsSourcedFunctionProps extends BaseFunctionProps {
  queueProps?: QueueProps;
}

export interface QueueProps {
  visibilityTimeout?: Duration;
  retentionPeriod?: Duration;
}

const queueDefaults = {
  retentionPeriod: Defaults.SQS.RETENTION_PERIOD,
};

export default class SqsSourcedFunction {
  constructor(
    parent: Construct,
    context: Context,
    props: SqsSourcedFunctionProps
  ) {
    const resolvedProps: SqsSourcedFunctionProps = this.resolveDefaults(props);
    const queue = this.createQueue(parent, context, resolvedProps);
    this.createFunction(parent, context, resolvedProps, queue);
  }

  private resolveDefaults(props: SqsSourcedFunctionProps) {
    const resolvedProps = {
      ...baseFnDefaults,
      ...props,
    };

    resolvedProps.queueProps = {
      ...queueDefaults,
      ...resolvedProps?.queueProps,
    };

    return resolvedProps;
  }

  private createQueue(
    parent: Construct,
    context: Context,
    props: SqsSourcedFunctionProps
  ) {
    const queueName = context.namer.scopedName(
      `${props.name}-queue`,
      context.envInfo.name
    );

    const visibilityTimeout =
      props.queueProps?.visibilityTimeout ||
      Duration.seconds(
        this.lambdaTimeout(props) * Defaults.SQS.TIMEOUT_MULTIPLICATION_FACTOR
      );

    return new Queue(parent, queueName.originalName, {
      queueName: queueName.name,
      retentionPeriod: props.queueProps?.retentionPeriod,
      visibilityTimeout,
    });
  }

  private createFunction(
    parent: Construct,
    context: Context,
    props: SqsSourcedFunctionProps,
    queue: IQueue
  ): NodejsFunction {
    const functionName = context.namer.scopedName(
      props.name,
      context.envInfo.name
    ).name;

    const nodeJsFunctionProps: NodejsFunctionProps = {
      functionName,
      bundling: {
        externalModules: [
          "aws-sdk", // Use the 'aws-sdk' available in the Lambda runtime
        ],
      },
      environment: {},
      runtime: Runtime.NODEJS_16_X,
    };

    const fn = new NodejsFunction(parent, functionName, {
      ...nodeJsFunctionProps,
      entry: props.entry,
    });

    const eventSource = new SqsEventSource(queue);
    fn.addEventSource(eventSource);
    return fn;
  }

  private lambdaTimeout(props: SqsSourcedFunctionProps): number {
    return props.timeout?.toSeconds() || baseFnDefaults.timeout.toSeconds();
  }
}
