# A Typescript Monorepo with AWS CDK

This is a sample project to showcase typescript backend monorepo with AWS CDK

## Folder Structure

- `docs`: documentation folder
- `infra`: infrastructure related things like scripts, cf etc
- `src`: source code
  - `libs`: shared libraries which are used across components
    - `cdk-core`: reusable cdk infra code used across all the components
    - `common-lib`: common library used by all the components
  - `components`: all the components related to the project
    - `common-infra`: the common infrastructure which cut across all the components
    - `component-one`
    - `component-two`

## Documentation

- Developer Workflows
  - [Dev machine setup](./docs/workflows/dev-machine.md)
  - [Running code locally and housekeeping](./docs/workflows/housekeeping.md)
  - [Making commits and giving pull request](./docs/workflows/commits-and-pull-requests.md)
  - [Create a new component](./docs/workflows/create-new-component.md)
- Infrastructure
  - [AWS setup](./docs/infra/aws-setup.md)
  - [Bootstrap CDK](./docs/infra/cdk-bootstrap-and-setup.md)
  - [Deploy component one](./src/components/component-one/README.md)
  - [Deploy component two](./src/components/component-two/README.md)
- [Architecture Decision Records](./docs/adr/index.md)

## Infra code features

- abstraction of project, env, component and constructs
- everything is namespaced at project, env and component level. This allows us to deploy multiple envs like dev, test etc in the same AWS account without any conflicts in AWS resource namings
- the setup is testable for both unit and component level testing

## Practices

- [ADR](./docs/adr/index.md) as explained [here](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
- [Conventional Commits](./docs/workflows/commits-and-pull-requests.md)
- Infrastructure as Code using CDK
