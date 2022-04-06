import chalk from 'chalk';
import fs from 'fs';

import { packagesInfoPath } from '../config/paths.mjs';

const unpublish = (packageName) => {
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath));
  const packageInfo = packagesInfo[packageName];

  if (!packageInfo) {
    console.log(chalk.red(`Package ${packageName} not found in the local registry`));
    process.exit(1);
  }

  fs.unlinkSync(packageInfo.tarballPath);
  delete packagesInfo[packageName];
  fs.writeFileSync(packagesInfoPath, JSON.stringify(packagesInfo, null, 2));
  console.log(chalk.green('Package unpublished successfully!'));
};

export const command = 'unpublish <packageName>';
export const aliases = ['unpub'];
export const desc = 'Unpublish a package from the local registry';
export const builder = {};
export const handler = (argv) => unpublish(argv.packageName);
