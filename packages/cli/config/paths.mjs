import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { version } = require(path.join('..', 'package.json'));

export const packageDir = path.join(os.homedir(), '.loctry');
export const modulesRoot = path.join(packageDir, 'node_modules');
export const packagesInfoPath = path.join(packageDir, 'packages-info.json');
export const currentVersion = version;
