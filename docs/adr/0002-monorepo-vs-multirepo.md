# Monorepo vs Multirepo

- Status: Accepted
- Deciders: Team
- Date: 2022-06-07

## Context and Problem Statement

We have to pick between a monorepo and multiple repos.

## Considered Options

- a single monorepo for full source code and documentation
- multiple repo split across micro-services and infrastructure

## Decision Outcome

Chosen option: "monorepo", because in microservices world, it has significant benefits over multi-repo. See below for pros and cons.

## Pros and Cons of the Options

### Monorepo

- Good because, it gives a single holistic view of everything
- Good because, refactoring is simple
- Good because, makes it extremely simple for someone new on the project to understand the context
- Good because, the local project setup is very easy and overarching parent project is required to hold common files like docker-compose
- Bad because, it might be tricky to split build pipelines based on changes made. Though this is clearly supported by azure pipelines, so this should not be an issue
- Bad because, it is not possible to generate automatic changelogs for the sub-projects from git commit messages. This can be done if the team follows a discipline of adding "scope" to conventional commit messages
- Bad because, multiple teams working on same repo might step on each other toes. This can now be handled using sparse checkouts with git as mentioned [here](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)

### Multirepo

- Good because, it is easy to maintain if the team is split and people do not step on each other toes
- Good because, it simplifies the build pipelines
- Bad because, dependency management and refactoring becomes very tricky
- Bad because it becomes difficult to follow the standards and practices across projects
- Bad because managing common files to run project like docker-compose needs another repo and some weird directory structure locally
