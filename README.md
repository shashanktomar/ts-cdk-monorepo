# A Typescript Monorepo with AWS CDK

This is a sample project to showcase typescript backend monorepo with AWS CDK

## Folder Structure

- `docs`: documentation folder
- `infra`: infrastructure related things like scripts, cf etc
- `src`: source code
  - `libs`: shared libraries which are used across components
  - `components`: all the components related to the project

## Documentation

- Developer Workflows
  - [Dev Machine Setup](./docs/workflows/dev-machine.md)
  - [Running code locally and housekeeping](./docs/workflows/housekeeping.md)
  - [Making Commits and Giving Pull Request](./docs/workflows/commits-and-pull-requests.md)
  - [Create a New Component](./docs/workflows/create-new-component.md)
- Infrastructure
  - [AWS Setup](./docs/infra/aws-setup.md)
  - [Bootstrap CDK](./docs/infra/cdk-bootstrap-and-setup.md)
  - [Deploy Component One](./src/components/component-one/README.md)
- [Architecture Decision Records](./docs/adr/index.md)

## Infra code features

- abstraction of project, env, component and constructs
- everything is namespaced at project, env and component level. This allows us to deploy multiple envs like dev, test etc in the same AWS account without any conflicts in AWS resource namings
- the setup is testable for both unit and component level testing

## Gotchas

- add dependencies using `yarn add` and not `lerna add`. This is explained in depth [here](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

## Practices

- [ADR](./docs/adr/index.md) as explained [here](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
- [Conventional Commits](./docs/setup/commits-and-pull-requests.md)
- Single Trunk Development
- Infrastructure as Code
