import path from 'path';
import os from 'os';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

export const packageDir = path.join(os.homedir(), '.loctry');
export const modulesRoot = path.join(packageDir, 'node_modules');
export const packagesInfoPath = path.join(packageDir, 'packages-info.json');
export const currentVersion = version;
