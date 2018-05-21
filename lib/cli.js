'use strict';

import Fabric from '../';

const util = require('util');
const jade = require('jade');
const parse = require('xml2js').parseString;
const blessed = require('blessed');
const contrib = require('blessed-contrib');

//const Fabric = require('../');
const Viewer = require('wopr');

const MAX_ACTOR_LENGTH = 35;

/**
 * Base class for a terminal-like interface to the Fabric network.
 * @param       {Object} configuration Configuration object for the CLI.
 * @constructor
 * @property storage {Storage} - Instance of {@link Storage}.
 */
function CLI (init) {
  this['@data'] = init || {};

  this.config = Object.assign({
    oracle: true,
    ui: './assets/cli.jade'
  }, init);

  if (this.config.oracle) {
    this.oracle = new Fabric.HTTP({
      name: 'fabric'
    });

    this.oracle.on('changes', this.handler.bind(this));
  }

  this.clock = 0;
  this.stack = [];
  this.known = {};

  this.init();
}

// all user interfaces begin with a "Vector"
util.inherits(CLI, require('../lib/vector'));

CLI.prototype._createInstance = function () {
  let self = this;

  self.screen = blessed.screen({
    smartCSR: true,
    dockBorders: true
  });

  self.screen.key(['escape'], function (ch, key) {
    self.screen.destroy();
    process.exit();
  });
};

CLI.prototype._assembleInterface = function () {
  let self = this;

  self.controls = blessed.box({
    parent: self.screen,
    border: {
      type: 'line'
    },
    bottom: 0,
    height: 3
  });

  self.form = blessed.form({
    parent: self.screen,
    keys: true
  });

  self.textbox = blessed.textbox({
    parent: self.form,
    name: 'input',
    input: true,
    inputOnFocus: true,
    focused: true,
    value: '',
    bottom: 1,
    mouse: true,
    height: 3,
    width: '100%',
    border: {
      type: 'line'
    },
    keys: true
  });

  self.submit = blessed.button({
    parent: self.form,
    mouse: true,
    // keys: true,
    shrink: true,
    bottom: 0,
    right: 0,
    name: 'submit',
    content: '[ENTER] Send',
    style: {
      bg: 'blue'
    },
    padding: {
      left: 1,
      right: 1
    }
  });

  self.instructions = blessed.box({
    parent: self.screen,
    content: '[ESCAPE (2x)] exit]',
    bottom: 0,
    height: 1,
    width: '100%-20',
    padding: {
      left: 1,
      right: 1
    }
  });

  self.history = blessed.box({
    parent: self.screen,
    label: 'History',
    scrollable: true,
    alwaysScroll: true,
    keys: true,
    mouse: true,
    height: '100%-3',
    border: {
      type: 'line'
    },
    scrollbar: {}
  });

  self.textbox.key(['enter'], function (ch, key) {
    self.form.submit();
    self.textbox.clearValue();
    self.textbox.readInput();
  });

  self.submit.on('press', function () {
    self.form.submit();
  });

  self.form.on('submit', async function (data) {
    let now = new Date();
    let result = await self.oracle._POST('/messages', {
      created: now.toISOString(),
      input: data.input
    });

    // TODO: rely on datastore to trigger append
    self._appendMessage(result);

    self.form.reset();
    self.screen.render();
  });
};

// TODO: move to Fabric#Chat
CLI.prototype._appendMessage = function (message) {
  let self = this;
  let instance = Object.assign({
    created: new Date(),
    input: message.input
  }, message);

  self.history.pushLine(`${instance.created}${(instance.actor) ? ' ' + instance.actor : ''}: ${instance.input}`);
  self.history.setScrollPerc(100);
};

CLI.prototype.handler = function (msg) {
  console.log('[CLI]', 'received message from oracle:', msg);
};

CLI.prototype.start = async function () {
  let self = this;

  await self.oracle.start();

  self._createInstance();
  self._assembleInterface();

  self.screen.render();

  // TODO: use a status UI
  let start = new Date();
  self._appendMessage({
    actor: '[FABRIC]',
    created: start.toISOString(),
    input: 'Loading from history...'
  });

  // TODO: use method to only retrieve latest
  let logs = await self.oracle._GET('/messages') || [];

  // TODO: move to Oracle
  // self.oracle.machine.state.messages = logs;
  // self.oracle.machine.commit();

  logs.sort(function (a, b) {
    return new Date(a.created) - new Date(b.created);
  });

  for (let i in logs) {
    self._appendMessage(logs[i]);
  }

  // TODO: use a status UI
  let finish = new Date();
  self._appendMessage({
    actor: '[FABRIC]',
    created: finish.toISOString(),
    input: `Historical context loaded in ${finish - start}ms.  Welcome!`
  });

  // self.form.focus();
  self.textbox.readInput();
};

CLI.prototype.stop = function () {
  this.screen.destroy();
};

CLI.prototype.render = function (done) {
  const self = this;
  const render = jade.compileFile(this['@data'].ui);
  const xml = render(this['@data']);

  parse(xml, function (err, doc) {
    if (err) return console.error(err);
    //if (!doc || !doc.document) return console.error('Invalid UI definition.');

    console.debug('doc:', doc);

    self.screen = blessed.screen();
    self.viewer = new Viewer(doc, self.screen);

    self.screen.key(['q', 'escape'], function(ch, key) {
      process.exit()
    });

    for (var i in doc) {
      var item = doc[i];
      var name = Object.keys(item)[1];
      var element = contrib[i] || blessed[i];
      
      console.debug('loop:', item, name, element, opts);
      
      if (!element) throw new Error('Unexpected interface element: ' + name);
      
      var opts = self.viewer.readOptions(item, element);


      self.screen.append(element);
    }

    self.screen.render();
    //self.viewer.render();

    done();
  });
};

module.exports = CLI;
