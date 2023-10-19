import fs from 'node:fs';
import chalk from 'chalk';

import { packagesInfoPath } from '../config/paths.mjs';

const list = () => {
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath));
  const availablePackages = Object.values(packagesInfo);
  const hasPackages = availablePackages.length > 0;

  console.log(chalk.blue(hasPackages ? 'Available packages:' : 'No packages available'));

  if (!hasPackages) {
    console.log(`Use '${chalk.magenta('loctry publish')}' to publish new packages`);
    return;
  }

  availablePackages.forEach((packageInfo) => {
    console.log(`\n${packageInfo.name}@${chalk.magenta(packageInfo.version)}`);
    console.log(chalk.yellow(packageInfo.description || 'No description'));
  });
};

export const command = 'list';
export const desc = 'List available packages in the local registry';
export const builder = {};
export const handler = list;
