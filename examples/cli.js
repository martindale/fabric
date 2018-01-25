'use strict';

//const Oracle = require('./oracle');
const CLI = require('../lib/cli');

async function main () {
  try {
    const cli = new CLI({
      ui: './assets/cli.jade'
    });

    cli.start();
  } catch (exception) {
    console.error('[CLI]', 'exception', exception);
  }

}

main();
