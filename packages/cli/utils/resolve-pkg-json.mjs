import { readFileSync } from 'fs';
import { findUpSync } from 'find-up';

/**
 * Resolve package.json info from the current working directory.
 */
export const resolvePkgJson = () => {
  const packageJsonPath = findUpSync('package.json', { cwd: process.cwd() });
  const packageJson = JSON.parse(readFileSync(packageJsonPath));

  return packageJson;
};
