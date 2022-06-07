# Dev Machine Setup

## Linux/Mac

### Required tools

- git
- nodejs
- yarn (>2.0) as described [here](https://yarnpkg.com/getting-started/install)
- aws cli
- aws sam cli
- docker engine
- docker compose (>=1.25.5)
- [aws-setup](../infra/aws-setup.md)

### Optional tools

- install [commitizen](https://github.com/commitizen/cz-cli). This helps you in making commits which are compatible with [conventional-commit](../adr/0003-conventional-commits.md) messages
  - `npm install -g commitizen`
  - `npm install -g cz-conventional-changelog`
  - `echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc`
  - now you can start using `git cz` for commit messages which follow the convention
