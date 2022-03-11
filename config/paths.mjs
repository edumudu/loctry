import path from 'path';
import os from 'os';

export const packageDir = path.join(os.homedir(), '.local-registry');
export const modulesRoot = path.join(packageDir, 'node_modules');
