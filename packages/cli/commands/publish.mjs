import { execSync } from 'child_process'
import chalk from 'chalk';
import fs from 'fs';
import { join } from 'path';

import { modulesRoot, packagesInfoPath } from '../config/paths.mjs';

const publish = () => {
  const packageInfo = JSON.parse(fs.readFileSync(join(process.cwd(), 'package.json')));
  const packagesInfo = JSON.parse(fs.readFileSync(packagesInfoPath));

  const tarballFilename = execSync(`npm pack --pack-destination ${modulesRoot}`).toString().trim();

  packagesInfo[packageInfo.name] = {
    name: packageInfo.name,
    version: packageInfo.version,
    description: packageInfo.description,
    tarballPath: path.join(modulesRoot, tarballFilename),
  };

  fs.writeFileSync(packagesInfoPath, JSON.stringify(packagesInfo, null, 2));
  console.log(chalk.green('Package published successfully!'));
};

export default publish;
