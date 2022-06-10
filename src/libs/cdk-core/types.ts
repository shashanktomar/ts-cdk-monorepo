import { Namer } from "./naming";
import { StackInfo } from "./stack/stack-info";

export type AWSRegion = "ap-southeast-1" | "ap-southeast-2";
export type Arn = string;
export type AwsEnvId = string;

export interface AwsEnv {
  readonly id: AwsEnvId;
  readonly region: AWSRegion;
  readonly accountId: string;
  readonly accountAlias: string;
}

export type EnvName = string;

export interface EnvInfo {
  readonly name: EnvName;
  readonly order: number;
}

export interface Env {
  readonly info: EnvInfo;
  readonly awsEnvs: AwsEnv[];
}

export interface ProjectName {
  readonly fullName: string;
  readonly shortName: string;
}

export interface ProjectConfig {
  projectName: ProjectName;
  tags: Record<string, string>;
  readonly accounts: AwsEnv[];
  readonly envs: {
    readonly info: EnvInfo;
    readonly awsEnvs: string[];
  }[];
}

export interface Context {
  projectName: ProjectName;
  componentName: string;
  envInfo: EnvInfo;
  namer: Namer;
  stackInfo: StackInfo;
}
