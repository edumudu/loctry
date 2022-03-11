#! /usr/bin/env node
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { modulesRoot, packageDir } from '../config/paths.mjs';

import publish from '../commands/publish.mjs';
import install from '../commands/install.mjs';

// Verify if global node_modules and package exists, if not, create it
if(!fs.existsSync(packageDir)) fs.mkdirSync(packageDir);
if(!fs.existsSync(modulesRoot)) fs.mkdirSync(modulesRoot);

yargs(hideBin(process.argv))
  .command('publish', 'Publish a package to the local registry', (yargsInstance) => publish(yargsInstance.parse()))
  .command('install', 'Install a package from the local registry', (yargsInstance) => install(yargsInstance.parse()._[1]))
  .parse()
