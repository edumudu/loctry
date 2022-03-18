/**
 * yargs not supports command modules with esm yet,
 * so we need to export an array of commands modules
 */

import * as publishModule from './publish.mjs';
import * as installModule from './install.mjs';

export const commands = [
  publishModule,
  installModule,
];
