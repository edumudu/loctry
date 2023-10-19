import fs from 'node:fs';
import chalk from 'chalk';

import { packagesInfoPath } from '../config/paths.mjs';

const info = (packageName) => {
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath, 'utf-8'));
  const packageInfo = packagesInfo[packageName];

  if (!packageInfo) {
    console.log(chalk.red(`Package ${packageName} not found in the local registry`));
    process.exit(1);
  }

  console.log(chalk.cyan(JSON.stringify(packageInfo, null, 2)));
};

export const command = 'info <packageName>';
export const aliases = [];
export const desc = 'Returns info about a (local) published package';
export const builder = {};
export const handler = (argv) => info(argv.packageName);
