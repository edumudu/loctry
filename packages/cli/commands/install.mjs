import { execSync } from 'child_process';
import fs from 'fs';
import chalk from 'chalk';

import { packagesInfoPath } from '../config/paths.mjs';

const install = (packageName) => {
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath, 'utf-8'));
  const tarballPath = packagesInfo[packageName]?.tarballPath;

  if (!tarballPath) {
    console.log(chalk.red(`Package ${packageName} not found in the local registry`));
    process.exit(1);
  }

  execSync(`npm install ${tarballPath}`);
  console.log(chalk.green('Package installed successfully!'));
};

export const command = 'install <packageName>';
export const aliases = ['i'];
export const desc = 'Install a package from the local registry';
export const builder = {};
export const handler = (argv) => install(argv.packageName);
