import { execSync } from 'node:child_process';
import fs from 'node:fs';
import chalk from 'chalk';

import { packagesInfoPath } from '../config/paths.mjs';
import { getWorkdirPkgManager } from '../utils/get-workdir-pkg-manager.mjs';

const install = (packageName) => {
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath, 'utf-8'));
  const packageInfo = packagesInfo[packageName];
  const packageManager = getWorkdirPkgManager();

  if (!packageInfo?.tarballPath) {
    console.log(chalk.red(`Package ${packageName} not found in the local registry`));
    process.exit(1);
  }

  execSync(`${packageManager} add ${packageInfo.tarballPath}`, { stdio: 'inherit' });
  console.log(chalk.green('Package installed successfully!'));
};

export const command = 'install <packageName>';
export const aliases = ['i'];
export const desc = 'Install a package from the local registry';
export const builder = {};
export const handler = (argv) => install(argv.packageName);
