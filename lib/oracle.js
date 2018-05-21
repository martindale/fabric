'use strict';

import Fabric from '../';

const path = require('path');

const Machine = require('./machine');
const Storage = require('./storage');
const Walker = require('./walker');
const Vector = require('./vector');

class Oracle extends Vector {
  /**
   * Trusted point-of-reference for external services.
   * @param       {Object} initial - Initialization vector.
   * @constructor
   */
  constructor (init) {
    super();

    this.storage = new Storage({
      path: './data/oracle'
    });

    this.machine = new Machine({});
    this.mempool = [];

    this.state = {};
    this.keys = [];

    this.init();
  }

  async start () {
    if (this.storage.db && this.storage.db.isOpen()) return this;

    try {
      await this.storage.open();
    } catch (E) {
      console.error('[ORACLE]', 'start', E);
    }

    this.machine.on('changes', this._handler.bind(this));

    return this;
  }

  async stop () {
    try {
      await this.storage.close();
    } catch (E) {
      console.error('[ORACLE]', 'stop storage:', E);
    }
  }
}

Oracle.prototype._handler = function (changes) {
  this.mempool.push(changes);
  this.emit('changes', changes);
};

/**
 * Core messaging function for interacting with this object in system-time.
 * @param  {Message} msg Instance of a {@link module:Message} object, validated then transmitted verbatim.
 * @return {Boolean}     Returns `true` on success, `false` on failure.
 */
Oracle.prototype.broadcast = function (msg) {
  return this.emit('message', msg);
};

/**
 * Synchronously reads a local path into memory.
 * @param  {String} path - dir (path to read)
 * @return {Vector} Computed vector.
 */
Oracle.prototype._load = async function bootstrap (dir) {
  let self = this;
  let walker = new Walker();

  let map = await walker._define(dir, {});
  let list = Object.keys(map);

  for (var i = 0; i < list.length; i++) {
    let file = path.join('/', list[i]);
    let content = map[list[i]];
    console.debug('[ORACLE]', 'saving:', content.length, 'bytes to', file);
    let result = await self.storage.set(file, content);
    let vector = new Fabric.Vector(result)._sign();
  }

  let tree = list.map(function (x) {
    return x.replace(/^(.*)\/(.*)$/, '$2');
  });

  var response = [];

  try {
    let assets = await self._PUT('/assets', tree);
    self.tree = new Fabric.Vector(assets)._sign();
    response = self.tree;
  } catch (E) {
    console.error(E);
  }

  return response;
};

Oracle.prototype._GET = async function (key, params) {
  let result = null;

  try {
    result = await this.storage.get(key);
  } catch (E) {
    console.error(E);
  }

  return result;
};

Oracle.prototype._PUT = async function (key, obj) {
  let output = null;

  try {
    let vector = new Vector(obj)._sign();
    let result = await this.storage.set(key, vector['@data']);
    output = await this._GET(key);
  } catch (E) {
    console.error('[ORACLE]', '_PUT', E);
  }

  return output;
};

/**
 * Handle a request from a client to `create` an object.
 * @param  {String} key [description]
 * @param  {Object} obj [description]
 * @return {Vector}     [description]
 */
Oracle.prototype._POST = async function (key, obj) {
  let result = null;
  let collection = await this._GET(key);
  let standard = new Vector(collection)._sign();
  let vector = new Vector(obj)._sign();

  // collection does not exist, or there was an error.
  if (!collection || !(collection instanceof Array)) collection = [];

  collection.push(obj);

  try {
    let id = key + '/' + vector['@id'];
    let index = await this._PUT(key, collection);

    this.keys.push(key);
    this.keys.push(id);

    result = await this._PUT(id, vector['@data']);
  } catch (E) {
    console.debug(E);
  }

  return result;
};

Oracle.prototype._PATCH = async function (key, changes) {
  let result = null;

  try {
    let output = null;
    let start = await this._GET(key);
    let state = new Fabric.Vector(start)._sign();

    if (typeof state['@data'] === 'string') {
      // TODO: lookup of known id collection
      output = changes;
    } else {
      output = Object.assign({}, state['@data'] || {}, changes);
    }

    result = await this._PUT(key, output);
  } catch (E) {
    console.debug(E);
  }

  return result;
};

Oracle.prototype._DELETE = async function (key) {
  await this._PUT(key, null);
  return null;
};

Oracle.prototype._OPTIONS = async function (key) {
  var result = null;

  try {
    result = await this.storage.get(key);
  } catch (E) {
    console.debug(E);
  }

  try {
    result = new Vector(result)._sign();
  } catch (E) {
    console.debug(E);
  }

  return result;
};

Oracle.prototype.flush = async function () {
  console.log('[ORACLE]', 'flush requested:', this.keys);
  let result = null;

  for (var i in this.keys) {
    console.log('...flushing', this.keys[i]);
    try {
      result = await this._DELETE(this.keys[i]);
    } catch (E) {
      console.error(E);
    }
  }

  return result;
};

module.exports = Oracle;
