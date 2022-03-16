#! /usr/bin/env node
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

import { modulesRoot, packageDir, packagesInfoPath } from '../config/paths.mjs';

import publish from '../commands/publish.mjs';
import install from '../commands/install.mjs';

// Verify if global node_modules and package exists, if not, create it
if(!fs.existsSync(packageDir)) fs.mkdirSync(packageDir);
if(!fs.existsSync(modulesRoot)) fs.mkdirSync(modulesRoot);
if(!fs.existsSync(packagesInfoPath)) fs.writeFileSync(packagesInfoPath, '{}');

yargs(hideBin(process.argv))
  .command('publish', 'Publish a package to the local registry', {}, () => publish())
  .command('install <packageName>', 'Install a package from the local registry', {}, (argv) => install(argv.packageName))
  .demandCommand(1, chalk.red('You need to specify a command'))
  .strict()
  .help()
  .version()
  .parse();
