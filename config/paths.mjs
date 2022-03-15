import path from 'path';
import os from 'os';

export const packageDir = path.join(os.homedir(), '.loctry');
export const modulesRoot = path.join(packageDir, 'node_modules');
