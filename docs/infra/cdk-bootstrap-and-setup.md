# CDK Bootstrap

To use cdk, a one time bootstrapping process is required per aws account.
It is documented [here](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html) in depth.

We have created a bootstrapped template using `cdk bootstrap --show-template > bootstrap-template.yaml`. It is committed and you can find it under `src/components/common-infra/bootstrap/bootstrap-template.yml`

## Steps to bootstrap a new aws account

- make sure you are pointing to the correct aws `--profile`. You can run `export AWS_PROFILE=<profile-name>`
- run `yarn run cdk-bootstrap` from root folder

## Other notes about CDK setup

- Features in `cdk.json` can be found [here](https://github.com/aws/aws-cdk/blob/v1-main/packages/@aws-cdk/cx-api/lib/features.ts)
