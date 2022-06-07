# Conventional Commits

- Status: Accepted
- Deciders: Team
- Date: 2022-06-07

## Context and Problem Statement

Free text commit messages can't be parsed by automation tools. [Conventional commits][conventional commits] can be handy for this scenario.

## Decision Drivers

- support for automated changelog generation
- support for automated semver versioning

## Considered Options

- Free text commit messages
- [Conventional commits][conventional commits]

## Decision Outcome

Chosen option: "conventional commits", because it can help us integrating automation tools down the line.

## Pros and Cons of the Options

### Free Text

- Good because, developers are used to it and it is simple
- Bad because, everyone has their own style and there is no standard for commit messages
- Bad because, commit messages are not parseable and can not inform the pipeline in any way

## Links

- [Conventional commits][conventional commits]

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/
