import { Environment, StackProps } from "aws-cdk-lib";
import { AccountPrincipal } from "aws-cdk-lib/aws-iam";
import { ScopedName } from "../naming";
import { AwsEnv } from "../types";

export class StackInfo implements StackProps {
  public readonly stackName: string;
  public readonly description: string;
  public readonly env: Environment;

  constructor(
    public readonly scopedStackName: ScopedName,
    public readonly awsEnv: AwsEnv,
    public readonly tags: Record<string, string> = {},
    description?: string
  ) {
    this.stackName = scopedStackName.name;
    this.description = description || scopedStackName.originalName;
    this.env = {
      account: this.awsEnv.accountId,
      region: this.awsEnv.region,
    };
  }

  accountPrincipal = () => new AccountPrincipal(this.awsEnv.accountId);
  accountId = () => this.awsEnv.accountId;
}
