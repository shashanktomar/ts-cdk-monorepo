import { ProjectConfig } from "cdk-core/types";

const DEV_ACCOUNT_ID = "337652044639";
export const DEV_SOUTHEAST_2_ID = `${DEV_ACCOUNT_ID}-southeast-2`;
export const envs = {
  ENV_DEV: {
    name: "dev",
    order: 1,
  },
  ENV_TEST: {
    name: "test",
    order: 2,
  },
  ENV_PROD: {
    name: "prod",
    order: 3,
  },
};

export const projectConfig: ProjectConfig = {
  projectName: {
    fullName: "ts-cdk-monorepo",
    shortName: "tcm",
  },

  tags: {
    Source: "CDK",
  },
  accounts: [
    {
      id: DEV_SOUTHEAST_2_ID,
      accountId: DEV_ACCOUNT_ID,
      region: "ap-southeast-2",
      accountAlias: "dev",
    },
  ],
  envs: [
    {
      info: envs.ENV_DEV,
      awsEnvs: [DEV_SOUTHEAST_2_ID],
    },
    {
      info: envs.ENV_PROD,
      awsEnvs: [DEV_SOUTHEAST_2_ID],
    },
  ],
};
