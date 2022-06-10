import { ProjectName } from "./types";

export interface ScopedName {
  readonly name: string;
  readonly originalName: string;
}

export interface Namer {
  scopedName(originalName: string, envName?: string): ScopedName;
  scopedFullName(originalName: string, envName?: string): ScopedName;
}

export default (projectName: ProjectName, componentName: string): Namer => {
  const projectShortNamePrefixer = (name: string) =>
    `${projectName.shortName}-${componentName}-${name}`;

  const projectFullNamePrefixer = (name: string) =>
    `${projectName.fullName}-${componentName}-${name}`;

  const envShortNamePrefixer = (envName: string, name: string) =>
    `${projectName.shortName}-${envName}-${componentName}-${name}`;

  const envFullNamePrefixer = (envName: string, name: string) =>
    `${projectName.fullName}-${envName}-${componentName}-${name}`;

  return {
    scopedName: (originalName: string, envName?: string): ScopedName => {
      const name = envName
        ? envShortNamePrefixer(envName, originalName)
        : projectShortNamePrefixer(originalName);
      return { name, originalName };
    },

    scopedFullName: (originalName: string, envName?: string): ScopedName => {
      const name = envName
        ? envFullNamePrefixer(envName, originalName)
        : projectFullNamePrefixer(originalName);
      return { name, originalName };
    },
  };
};
