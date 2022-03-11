import { execSync } from 'child_process'
import chalk from 'chalk';

import { modulesRoot } from '../config/paths.mjs';

const publish = () => {
  execSync(`npm pack --pack-destination ${modulesRoot}`);

  console.log(chalk.green('Package published successfully!'));
};

export default publish;
