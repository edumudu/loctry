import process from 'process';

import { findUpSync } from 'find-up';

/**
 * Resolve a file based on its name current working directory.
 */
export const resolveFile = (fileName) => findUpSync(fileName, { cwd: process.cwd() });
