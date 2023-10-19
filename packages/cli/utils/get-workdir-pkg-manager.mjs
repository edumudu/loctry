import path from 'path';
import chalk from 'chalk';

import { resolvePkgJson } from './resolve-pkg-json.mjs';
import { resolveFile } from './resolve-file.mjs';
import { LOCK_FILES } from '../config/agents.mjs';

function resolvePackageManager(packageJson) {
  const pkgManagerStr = packageJson.packageManager || '';
  let [packageManager] = pkgManagerStr.split('@');

  if (packageManager) return packageManager;

  const lockFilePath = resolveFile(LOCK_FILES.map(([lockFile]) => lockFile));
  [, packageManager] = LOCK_FILES.find(([file]) => file === path.basename(lockFilePath));

  return packageManager;
}

/**
 * Returns the package manager to use in the current working directory.
 */
export const getWorkdirPkgManager = () => {
  const workdirPackageInfo = resolvePkgJson();
  const packageManager = resolvePackageManager(workdirPackageInfo);

  if (!packageManager) {
    console.log(chalk.red('Could not resolve package manager in the current working directory.'));
    process.exit(1);
  }

  return packageManager;
};
