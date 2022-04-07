/**
 * yargs not supports command modules with esm yet,
 * so we need to export an array of commands modules
 */

import * as publishModule from './publish.mjs';
import * as unpublishModule from './unpublish.mjs';
import * as installModule from './install.mjs';
import * as listModule from './list.mjs';
import * as info from './info.mjs';

export const commands = [
  publishModule,
  unpublishModule,
  installModule,
  listModule,
  info,
];
