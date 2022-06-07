# Housekeeping

## Run code locally

- run `yarn install` in root folder
- run `yarn plugin import workspace-tools` in root folder

## Useful commands

- yarn
  - `yarn workspace <component> add <package>` to add `<package>` on a single component
  - `yarn workspace <component> run <cmd>` to run `cmd` on a single component
  - `yarn workspaces focus -h` to install a single workspace and its dependencies.
  - `yarn workspaces foreach -h` for commands on all workspaces
  - `yarn why <package>` to explain why `<package>` is used in your project
