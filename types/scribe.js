'use strict';

const crypto = require('crypto');

// Fabric Components
const State = require('./state');

/**
 * Simple tag-based recordkeeper.
 * @property {Object} config Current configuration.
 */
class Scribe extends State {
  /**
   * The "Scribe" is a simple tag-based recordkeeper.
   * @param       {Object} config General configuration object.
   * @param       {Boolean} config.verbose Should the Scribe be noisy?
   */
  constructor (config = {}) {
    super(config);

    // assign the defaults;
    this.config = Object.assign({
      verbose: true,
      path: './stores/scribe'
    }, config);

    this.tags = [];
    this.state = new State(config);

    // signal ready
    this.status = 'ready';

    Object.defineProperty(this, 'tags', {
      enumerable: false
    });

    return this;
  }

  now () {
    // return new Date().toISOString();
    return new Date().getTime();
  }

  sha256 (data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  _sign () {
    this.commit();
  }

  /**
   * Blindly bind event handlers to the {@link Source}.
   * @param  {Source} source Event stream.
   * @return {Scribe}        Instance of the {@link Scribe}.
   */
  trust (source) {
    let self = this;

    source.on('transaction', async function (transaction) {
      self.log('[SCRIBE]', '[EVENT:TRANSACTION]', 'apply this transaction to local state:', transaction);
      self.log('[PROPOSAL]', 'apply this transaction to local state:', transaction);
    });

    return self;
  }

  /**
   * Use an existing Scribe instance as a parent.
   * @param  {Scribe} scribe Instance of Scribe to use as parent.
   * @return {Scribe}        The configured instance of the Scribe.
   */
  inherits (scribe) {
    return this.tags.push(scribe.config.namespace);
  }

  log (...inputs) {
    let now = this.now();

    inputs.unshift(`[${this.constructor.name.toUpperCase()}]`);
    inputs.unshift(`[${now}]`);

    if (this.config && this.config.verbose) {
      console.log.apply(null, this.tags.concat(inputs));
    }

    return this.emit('info', this.tags.concat(inputs));
  }

  error (...inputs) {
    let now = this.now();

    inputs.unshift(`[${this.constructor.name.toUpperCase()}]`);
    inputs.unshift(`[${now}]`);

    if (this.config.verbose) {
      console.error.apply(null, this.tags.concat(inputs));
    }

    return this.emit('error', this.tags.concat(inputs));
  }

  warn (...inputs) {
    let now = this.now();

    inputs.unshift(`[${this.constructor.name.toUpperCase()}]`);
    inputs.unshift(`[${now}]`);

    if (this.config.verbose) {
      console.warn.apply(null, this.tags.concat(inputs));
    }

    return this.emit('warning', this.tags.concat(inputs));
  }

  debug (...inputs) {
    let now = this.now();

    inputs.unshift(`[${this.constructor.name.toUpperCase()}]`);
    inputs.unshift(`[${now}]`);

    if (this.config.verbose) {
      console.debug.apply(null, this.tags.concat(inputs));
    }

    return this.emit('debug', this.tags.concat(inputs));
  }

  async open () {
    this.status = 'opened';
    return this;
  }

  async close () {
    this.status = 'closed';
    return this;
  }

  async start () {
    this.status = 'starting';
    this['@data'] = this.config;

    await this.open();
    await this.commit();

    // this.trust(this.state);

    this.status = 'started';

    return this;
  }

  async stop () {
    this.status = 'stopping';
    await this.close();
    this.status = 'stopped';
    return this;
  }
}

module.exports = Scribe;
