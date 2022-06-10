import { Stack, Tags } from "aws-cdk-lib";
import { Construct } from "constructs";
import { StackInfo } from "./stack-info";

export abstract class BaseStack extends Stack {
  constructor(parent: Construct, protected readonly stackInfo: StackInfo) {
    super(parent, stackInfo.stackName, stackInfo);
    this.addTags(stackInfo.tags);
  }

  private addTags = (tags: Record<string, string>) => {
    for (let k in tags) {
      Tags.of(this).add(k, tags[k]);
    }
  };
}
