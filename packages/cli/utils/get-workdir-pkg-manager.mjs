import { resolvePkgJson } from './resolve-pkg-json.mjs';

/**
 * Returns the package manager to use in the current working directory.
 */
export const getWorkdirPkgManager = () => {
  const workdirPackageInfo = resolvePkgJson();
  const [packageManager] = workdirPackageInfo.packageManager.split('@');

  return packageManager;
};
