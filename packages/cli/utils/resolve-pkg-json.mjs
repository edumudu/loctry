import { readFileSync } from 'fs';

import { resolveFile } from './resolve-file.mjs';

/**
 * Resolve package.json info from the current working directory.
 */
export const resolvePkgJson = () => {
  const packageJsonPath = resolveFile('package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath));

  return packageJson;
};
