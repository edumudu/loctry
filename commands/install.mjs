import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import { modulesRoot } from '../config/paths.mjs';

const install = (packageName) => {
  const filenameMatchRegex = new RegExp(`^${packageName}-v?\\d+\\.\\d+\\.\\d+\\.tgz$`);
  const availableVersions = fs.readdirSync(modulesRoot).filter((file) => filenameMatchRegex.test(file));
  const tarballFilename = availableVersions[availableVersions.length - 1];

  if(!tarballFilename) {
    console.log(chalk.red(`Package ${packageName} not found in the local registry`));
    process.exit(1);
  };

  const packageTarballAbsPath = path.join(modulesRoot, tarballFilename);

  execSync(`npm install ${packageTarballAbsPath}`);
  console.log(chalk.green('Package installed successfully!'));
};

export default install;
