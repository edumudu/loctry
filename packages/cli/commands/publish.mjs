import { execSync } from 'child_process';
import chalk from 'chalk';
import fs from 'fs';
import { join } from 'path';
import process from 'process';

import { modulesRoot, packagesInfoPath } from '../config/paths.mjs';

const publish = () => {
  const packageInfo = JSON.parse(fs.readFileSync(join(process.cwd(), 'package.json')));
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath));

  console.log(chalk.blue(`Publishing ${packageInfo.name}@${packageInfo.version}...`));

  const tarballFilename = execSync(`npm pack --pack-destination ${modulesRoot}`).toString().trim();

  packagesInfo[packageInfo.name] = {
    name: packageInfo.name,
    version: packageInfo.version,
    description: packageInfo.description,
    tarballPath: join(modulesRoot, tarballFilename),
  };

  fs.writeFileSync(packagesInfoPath, JSON.stringify(packagesInfo, null, 2));
  console.log(chalk.green('Package published successfully!'));
  console.log(chalk.blueBright(`You can run "loctry install ${packageInfo.name}" to install it.`));
};

export const command = 'publish';
export const aliases = ['pub'];
export const desc = 'Publish a package to the local registry';
export const builder = {};
export const handler = publish;
