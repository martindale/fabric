'use strict';

const {
  LARGE_COLLECTION_SIZE
} = require('../constants');

// Core
const Fabric = require('../');
const Web = require('@fabric/http');

// Modules
const Service = require('../types/service');
// const Schnorr = require('../lib/schnorr');

// Testing
const assert = require('assert');
const crypto = require('crypto');
// const expect = require('chai').expect;

// Data
const genesis = require('../assets/fabric.json');
const message = require('../assets/message');
const samples = require('../assets/samples');

// Opcodes
const OPCODES = require('../assets/opcodes');
const LOCAL_SERVER_CONFIG = {
  host: 'localhost',
  port: 9999,
  secure: false
};

// test our own expectations.  best of luck.
// TODO: write parser for comments
// Some of our GitHub Issues have tables and/or YAML — reading "frontmatter"
// from tables in documents should be standardized.
// @consensus:
// @quest:
describe('@fabric/core', function () {
  describe('Fabric', function () {
    // Everything should be a function...
    it('should expose a constructor', function () {
      assert.equal(Fabric instanceof Function, true);
    });

    // This doubles as an example pattern for running Fabric nodes.
    it('can start and stop smoothly', function (done) {
      let fabric = new Fabric();

      // We'll use Events in this first example, as they're essential to the
      // design of Fabric as a protocol for communication.
      fabric.on('done', done);

      // Define our `main` process.
      async function main () {
        await fabric.start();
        await fabric.stop();
      }

      // Run the `main` process, ().
      main();
    });

    it('generates the correct, hard-coded genesis seed', async function provenance () {
      let seed = new Fabric.Entity(genesis['@data']);

      assert.equal(seed.id, genesis['@id']);
      assert.equal(seed.id, samples.output.fabric);
    });

    it('serializes strings correctly', async function () {
      let state = new Fabric.Entity('Hello, world!');
      let hash = crypto.createHash('sha256').update('"Hello, world!"', 'utf8').digest('hex');
      let rendered = state.serialize();

      console.log('rendered.toString():', rendered.toString());

      assert.equal(rendered.toString(), '"Hello, world!"');
      assert.equal(state.id, samples.output.hello);

      assert.equal(rendered.toString(), samples.input.hello);
      assert.equal(state.id, samples.output.hello);
      assert.equal(state.id, hash);
    });

    it('serializes lists correctly', async function () {
      let state = new Fabric.State(['Hello, world!']);
      let hash = crypto.createHash('sha256').update('["Hello, world!"]', 'utf8').digest('hex');
      let rendered = state.render();

      assert.equal(rendered.toString('utf8'), '["Hello, world!"]');
      assert.equal(state.id, samples.output.collection);
      assert.equal(state['@data'][0], samples.input.bare);
      assert.equal(rendered.toString(), samples.input.collection);
      assert.equal(state.id, samples.output.collection);
      assert.equal(state.id, hash);
    });

    it('manages lists effectively', async function () {
      let state = new Fabric.State(['Hello, world!']);
      let hash = crypto.createHash('sha256').update('["Hello, world!"]', 'utf8').digest('hex');
      let rendered = state.render();

      assert.equal(rendered.toString(), '["Hello, world!"]');
      assert.equal(state.id, samples.output.collection);
      assert.equal(state['@data'][0], samples.input.bare);
      assert.equal(rendered.toString(), samples.input.collection);
      assert.equal(state.id, samples.output.collection);
      assert.equal(state.id, hash);
    });

    it('manages maps effectively', async function () {
      let sample = { entropy: Math.random() };
      let state = new Fabric.State(sample);
      let hash = crypto.createHash('sha256').update(JSON.stringify(sample), 'utf8').digest('hex');
      let rendered = state.render();

      assert.equal(rendered, JSON.stringify(sample));
      assert.equal(state.id, hash);
    });

    xit('implements Schnorr', async function () {
      const p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;
      const n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;
      const x_G = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
      const y_G = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;
      let schnorr = new Schnorr();
      let product = schnorr.multiply(p, n);

      console.log('schnorr:', schnorr);
      console.log('product:', product);

      assert.equal(p, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F);
      assert.equal(n, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141);
    });

    it('can verify a chain of one', async function () {
      let state = new Fabric.State(['Hello, world!']);
      let hash = crypto.createHash('sha256').update('["Hello, world!"]', 'utf8').digest('hex');
      let rendered = state.render();

      assert.equal(rendered, '["Hello, world!"]');
      assert.equal(state.id, samples.output.collection);
      assert.equal(state['@data'][0], samples.input.bare);
      assert.equal(rendered.toString(), samples.input.collection);
      assert.equal(state.id, samples.output.collection);
      assert.equal(state.id, hash);
    });

    it('passes some sanity checks', async function () {
      let buffer = Buffer.from('"Hello, world!"', 'utf8');
      let state = new Fabric.Entity('Hello, world!');
      let hash = crypto.createHash('sha256').update('"Hello, world!"', 'utf8').digest('hex');
      let reconstructed = Fabric.State.fromString('"Hello, world!"');
      assert.equal(state.id, samples.output.hello);
      assert.equal(state.id, hash);
    });

    it('passes longer sanity checks', async function () {
      let buffer = Buffer.from('["Hello, world!"]', 'utf8');
      let state = new Fabric.State(['Hello, world!']);
      let hash = crypto.createHash('sha256').update('["Hello, world!"]', 'utf8').digest('hex');
      let rendered = state.render();

      assert.equal(state.id, samples.output.collection);
      assert.equal(state.id, hash);
      assert.equal(rendered, buffer.toString());
    });

    it('can store and retrieve a buffer', async function () {
      let buffer = Buffer.from(message['@data'], 'utf8');
      let fabric = new Fabric({
        path: './stores/test',
        persistent: false
      });

      await fabric.start();

      let set = await fabric._SET('assets/test', buffer);
      let get = await fabric._GET('assets/test');

      await fabric.stop();

      console.log('set:', set);

      assert.equal(set.toString('utf8'), buffer.toString('utf8'));
      assert.equal(get.constructor.name, 'Buffer');
      assert.equal(get.toString(), buffer.toString());
      assert.equal(get.toString('hex'), buffer.toString('hex'));
      assert.equal(get.toString(), message['@data']);
    });

    it('can store and retrieve an array', async function () {
      let array = [message['@data']];
      let fabric = new Fabric({
        path: './stores/secondary',
        persistent: false
      });

      await fabric.start();

      let set = await fabric._SET('assets/test', array);
      let get = await fabric._GET('assets/test');

      await fabric.stop();

      assert.equal(JSON.stringify(set), JSON.stringify(array));
      assert.equal(JSON.stringify(get), JSON.stringify(array));
      assert.equal(set.constructor.name, 'Array');
      assert.equal(get.constructor.name, 'Array');
    });

    it('can store and retrieve a string', async function () {
      let string = message['@data'];
      let fabric = new Fabric({
        path: './stores/strings',
        persistent: false
      });

      await fabric.start();

      let set = await fabric._SET('assets/test', string);
      let get = await fabric._GET('assets/test');

      await fabric.stop();

      assert.equal(set, string);
      assert.equal(get.constructor.name, 'String');
      assert.equal(get.toString(), string);
    });

    it('can store and retrieve a blob', async function datastore () {
      let blob = { blob: message['@data'] };
      let fabric = new Fabric({
        path: './stores/blob',
        persistent: false
      });

      await fabric.start();

      let set = await fabric._SET('assets/test', blob);
      let get = await fabric._GET('assets/test');

      await fabric.stop();

      let samples = {
        set: new Fabric.State(set),
        // put: new Fabric.State(put),
        get: new Fabric.State(get)
      };

      assert.equal(JSON.stringify(set), JSON.stringify(blob));
      assert.equal(get.blob, message['@data']);
    });

    it('can store and retrieve an object', async function datastore () {
      let fabric = new Fabric({
        persistent: false
      });

      await fabric.start();

      let put = await fabric._SET('assets/genesis', genesis['@data']);
      let get = await fabric._GET('assets/genesis');

      await fabric.stop();

      assert.equal(JSON.stringify(get), JSON.stringify(put));
      assert.equal(JSON.stringify(get), JSON.stringify(genesis['@data']));

      assert.equal(typeof get, typeof genesis);
    });
  });

  describe('App', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.App instanceof Function, true);
    });

    it('has a normal lifecycle', async function () {
      let app = new Fabric.App();
      await app.start();
      await app.stop();
      console.log('app:', app);
      assert.ok(app);
    });
  });

  describe('Block', function () {
    xit('is available from @fabric/core', function () {
      assert.equal(Fabric.Block instanceof Function, true);
    });

    xit('can smoothly create a new block', function () {
      let block = new Fabric.Block();
      console.log('block', block);
      assert.equal(block.id, '2d4e630ea2e7ddf740ca09f5d483fa21cc14117164da01f6db75b973e71191cd');
    });

    xit('can smoothly create a new block from data', function () {
      let block = new Fabric.Block({
        name: 'fun'
      });
      assert.equal(block.id, '4636f10c63fef5a1e0e5206358afff993e212a032fba091cf282c9bf3d35da85');
    });
  });

  describe('Chain', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Chain instanceof Function, true);
    });

    it('can cleanly start and stop a chain', async function () {
      let chain = new Fabric.Chain();

      await chain.start();
      await chain.stop();

      assert.ok(chain);
      assert.ok(chain.ledger);
    });

    it('can append an arbitrary message', async function () {
      let chain = new Fabric.Chain();

      await chain.start();
      await chain.append({ debug: true, input: 'Hello, world.' });
      await chain.stop();

      assert.ok(chain);
      assert.ok(chain.ledger);
    });

    xit('generates a merkle tree with the expected proof of inclusion', async function () {
      let chain = new Fabric.Chain();

      await chain.start();
      await chain.append({ debug: true, input: 'Hello, world.' });
      await chain.append({ debug: true, input: 'Why trust?  Verify.' });
      await chain.stop();

      let sample = chain.blocks.map(b => Buffer.from(b['@id'], 'hex'));
      let tree = chain['@tree'];
      let root = tree.getRoot();

      let proofs = {
        genesis: tree.getProof(sample[0], 0),
        'blocks/1': tree.getProof(sample[1], 1),
        'blocks/2': tree.getProof(sample[2], 2)
      };

      let verifiers = {
        genesis: tree.verify(proofs.genesis, sample[0], root),
        'blocks/1': tree.verify(proofs['blocks/1'], sample[1], root),
        'blocks/2': tree.verify(proofs['blocks/2'], sample[2], root),
        invalid: tree.verify(proofs['genesis'], Buffer.alloc(32), root)
      };

      assert.ok(chain);
      assert.equal(sample.length, 3);
      assert.equal(sample[0].toString('hex'), 'c1b294376d6d30d85a81cff9244e7b447a02e6307a047c4a53643a945022e505');
      assert.equal(sample[1].toString('hex'), '67822dac02f2c1ae1e202d8e75437eaede631861e60340b2fbb258cdb75780f3');
      assert.equal(sample[2].toString('hex'), 'a59402c14784e1be43b1adfc7832fa8c402dddf1ede7f7c29549d499b112444f');
      assert.equal(verifiers.genesis, true);
      assert.equal(verifiers['blocks/1'], true);
      assert.equal(verifiers['blocks/2'], true);
      assert.equal(verifiers.invalid, false);
    });
  });

  describe('Collection', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Collection instanceof Function, true);
    });

    it('starts as empty', async function () {
      let set = new Fabric.Collection();
      assert.equal(set.render(), '[]');
    });

    it('can hold a single entity', async function () {
      let set = new Fabric.Collection();
      set.push('test');
      console.log('the set:', set);
      let populated = await set.populate();
      console.log('populated:', populated);
      assert.equal(JSON.stringify(populated), '["test"]');
    });

    it('can restore from an Array object', async function () {
      let set = new Fabric.Collection(['test']);
      let populated = await set.populate();
      assert.equal(JSON.stringify(populated), '["test"]');
    });

    it('can restore from a more complex Array object', async function () {
      let set = new Fabric.Collection(['test', { text: 'Hello, world!' }]);
      let populated = await set.populate();
      assert.equal(JSON.stringify(populated), '["test",{"text":"Hello, world!"}]');
    });

    it('manages a collection of objects', async function () {
      let set = new Fabric.Collection();

      set.push('Α');
      set.push('Ω');

      let populated = await set.populate();

      console.log('set:', set);
      console.log('populated:', populated);
      console.log('rendered:', set.render());

      assert.equal(JSON.stringify(populated), '["Α","Ω"]');
      assert.equal(set.render(), '["2b99b4981c9947163e21a542ac3a7b1e1804ca6d933604d14280a4794e0939bb","432aa66781782a3d162c50fd9491af6a592a52f6ffe6a0dd996136b6fe74c2fa"]');
    });
  });

  /* Disabled as `fs` polyfill needed for the browser.
  // TODO: implement polyfill for browserland
  describe('Disk', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Disk instanceof Function, true);
    });
  });
  */

  describe('Entity', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Entity instanceof Function, true);
    });

    it('can generate a known string', function () {
      let entity = new Fabric.Entity({ foo: 'bar' });
      assert.equal(entity.toString(), '{"foo":"bar"}');
    });

    it('can generate a known buffer', function () {
      let entity = new Fabric.Entity({ foo: 'bar' });
      assert.equal(entity.toBuffer(), '{"foo":"bar"}');
    });
  });

  describe('Key', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Key instanceof Function, true);
    });

    it('can create an ECDSA key', function () {
      let key = new Fabric.Key();
      assert.ok(key);
    });

    it('can sign some data', function () {
      let key = new Fabric.Key();
      let signature = key._sign(message['@data']);

      assert.ok(signature);
    });

    it('produces a valid signature', function () {
      let key = new Fabric.Key();
      let signature = key._sign(message['@data']);
      let valid = key._verify(message['@data'], signature)
      assert.ok(valid);
    });
  });

  describe('Ledger', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Ledger instanceof Function, true);
    });

    it('can cleanly start and stop', async function () {
      let ledger = new Fabric.Ledger();

      await ledger.start();
      await ledger.stop();

      assert.ok(ledger);
    });

    xit('can append an arbitrary message', async function () {
      let ledger = new Fabric.Ledger();

      await ledger.start();
      await ledger.append({ debug: true, input: 'Hello, world.' });
      await ledger.stop();

      assert.ok(ledger);
    });

    xit('can append multiple arbitrary messages', async function () {
      let ledger = new Fabric.Ledger();
      let one = new Fabric.Vector({ debug: true, input: 'Hello, world.' });
      let two = new Fabric.Vector({ debug: true, input: 'Why trust?  Verify.' });

      await ledger.start();
      await ledger.append(one['@data']);
      await ledger.append(two['@data']);
      await ledger.stop();

      assert.ok(ledger);
      assert.equal(one.id, '67822dac02f2c1ae1e202d8e75437eaede631861e60340b2fbb258cdb75780f3');
      assert.equal(two.id, 'a59402c14784e1be43b1adfc7832fa8c402dddf1ede7f7c29549d499b112444f');
      assert.equal(ledger['@data'].length, 3);
      assert.equal(ledger['@data'][0].toString('hex'), '56083f882297623cde433a434db998b99ff47256abd69c3f58f8ce8ef7583ca3');
      assert.equal(ledger['@data'][1].toString('hex'), one.id);
      assert.equal(ledger['@data'][2].toString('hex'), two.id);
      assert.equal(ledger.id, 'af6b5824247f57e335ae807ee16e4ed157ee270fe20b780507418a885b636e1d');
    });

    xit('can replicate state', async function () {
      let anchor = new Fabric.Ledger();
      let sample = new Fabric.Ledger({ path: './stores/tests' });

      let one = new Fabric.Vector({ debug: true, input: 'Hello, world.' });
      let two = new Fabric.Vector({ debug: true, input: 'Why trust?  Verify.' });

      sample.trust(anchor);

      anchor.on('changes', function (changes) {
        console.log('changes:', changes);
      });

      await anchor.start();
      await sample.start();
      await anchor.append(one['@data']);
      await anchor.append(two['@data']);
      await sample.stop();
      await anchor.stop();

      console.log('[TEST]', '[CORE:LEDGER]', 'resulting anchor id:', anchor['@id']);
      console.log('anchor.id:', anchor.id);
      console.log('anchor.pages:', anchor.pages);
      console.log('anchor[@data]:', anchor['@data']);

      assert.ok(anchor);
      assert.equal(one.id, '67822dac02f2c1ae1e202d8e75437eaede631861e60340b2fbb258cdb75780f3');
      assert.equal(two.id, 'a59402c14784e1be43b1adfc7832fa8c402dddf1ede7f7c29549d499b112444f');
      assert.equal(anchor['@data'].length, 3);
      assert.equal(anchor['@data'][0].toString('hex'), '56083f882297623cde433a434db998b99ff47256abd69c3f58f8ce8ef7583ca3');
      assert.equal(anchor['@data'][1].toString('hex'), one.id);
      assert.equal(anchor['@data'][2].toString('hex'), two.id);
      assert.equal(anchor.id, 'af6b5824247f57e335ae807ee16e4ed157ee270fe20b780507418a885b636e1d');
      assert.equal(sample['@data'].length, 3);
      assert.equal(sample['@data'][0].toString('hex'), '56083f882297623cde433a434db998b99ff47256abd69c3f58f8ce8ef7583ca3');
      assert.equal(sample['@data'][1].toString('hex'), one.id);
      assert.equal(sample['@data'][2].toString('hex'), two.id);
      assert.equal(sample.id, 'af6b5824247f57e335ae807ee16e4ed157ee270fe20b780507418a885b636e1d');
    });
  });

  describe('Machine', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Machine instanceof Function, true);
    });

    it('can compute a value', async function prove () {
      // TODO: use Fabric itself
      let machine = new Fabric.Machine(false);

      // TODO: use Fabric instead of Fabric.Machine
      machine.define('OP_TRUE', OPCODES.OP_TRUE);

      // fabric.push('OP_TRUE');
      machine.script.push('OP_TRUE');

      await machine.start();
      await machine.compute();
      await machine.stop();

      console.log('machine state:', machine.state);

      // assert.equal(machine.state.id, samples.names.encodedStackWithSingleValidFrame);
      assert.equal(machine.state['@data'][0], true);
    });

    it('can correctly sum two values', async function prove () {
      let machine = new Fabric.Machine(false);

      machine.define('OP_ADD', OPCODES.OP_ADD);

      machine.script.push('1');
      machine.script.push('1');
      machine.script.push('OP_ADD');

      await machine.start();
      await machine.compute();
      await machine.stop();

      assert.equal(machine.state['@data'][0], 2);
    });

    it('can correctly sum three values', async function prove () {
      let machine = new Fabric.Machine(false);

      machine.define('OP_ADD', OPCODES.OP_ADD);

      machine.script.push('1');
      machine.script.push('1');
      machine.script.push('OP_ADD');
      machine.script.push('2');
      machine.script.push('OP_ADD');

      await machine.start();
      await machine.compute();
      await machine.stop();

      assert.equal(machine.state['@data'][0], 4);
    });
  });

  describe('Oracle', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Oracle instanceof Function, true);
    });

    it('can use _SET', async function () {
      let oracle = new Fabric.Oracle();

      await oracle.start();
      await oracle._SET('sample', message['@data']);
      await oracle.stop();

      assert.ok(oracle);
    });

    it('can store a string value', async function () {
      let oracle = new Fabric.Oracle();

      await oracle.start();
      let set = await oracle._SET('sample', message['@data']);
      let get = await oracle._GET('sample');
      await oracle.stop();

      assert.ok(oracle);
      assert.equal(typeof get, 'string');
    });
  });

  describe('Remote', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Remote instanceof Function, true);
    });

    it('can load OPTIONS', async function () {
      let server = new Web.Server();
      let remote = new Fabric.Remote({
        host: 'google.com',
        port: 443
      });

      await server.start();

      let result = await remote._OPTIONS(`/`);

      await server.stop();

      console.log('remote:', remote);
      console.log('result:', result);
      // assert.equal(result.toString('utf8'), '');
    });

    it('can load OPTIONS from local server', async function () {
      let server = new Web.Server();
      let remote = new Fabric.Remote(LOCAL_SERVER_CONFIG);

      await server.start();
      let result = await remote._OPTIONS(`/`);
      await server.stop();

      assert.equal(result.status, 200);
    });

    it('can load GET from local server', async function () {
      let server = new Web.Server();
      let remote = new Fabric.Remote(LOCAL_SERVER_CONFIG);

      await server.start();
      let result = await remote._GET(`/`);
      await server.stop();

      assert.equal(result.status, 200);
    });

    xit('can POST to local server', async function () {
      let server = new Web.Server();
      let remote = new Fabric.Remote(LOCAL_SERVER_CONFIG);

      await server.start();
      try {
        let result = await remote._POST(`/widgets`, { foo: 'bar' });
        console.log('result:', result);
      } catch (E) {
        console.error('Could not:', E);
      }
      await server.stop();

      assert.equal(result.status, 200);
    });
  });

  describe('Resource', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Resource instanceof Function, true);
    });
  });

  describe('Service', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Service instanceof Function, true);
    });

    it('can create an instance', async function provenance () {
      let service = new Service({
        name: 'Test'
      });

      assert.ok(service);
    });

    it('can start offering service', async function () {
      let service = new Service({
        name: 'fun'
      });

      await service.start();
      await service.stop();

      assert.ok(service);
    });
  });

  describe('Scribe', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Scribe instanceof Function, true);
    });
  });

  describe('Script', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Script instanceof Function, true);
    });
  });

  describe('Stack', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Stack instanceof Function, true);
    });

    it('can restore state from an Array-like object', function () {
      let stack = new Fabric.Stack(['test']);
      console.log('stack:', stack);
      console.log('stack.render():', stack.render());
      // TODO: move to constants, verify
      assert.equal(stack.id, 'dc0422e42d8bac213c34031a1af2a99223fbad851887d1dd03f11d144f0cfe75');
    });

    xit('can instantiate from a serialized state', function () {
      // TODO: migrate to Stack
      let stack = Fabric.Vector.fromObjectString('{ "0": { "type": "Buffer", "data": [0, 0, 0, 0 ] } }');
      assert.equal(stack instanceof Array, true);
      assert.equal(stack[0] instanceof Buffer, true);
      assert.equal(stack[0].toString('hex'), '00000000');
      assert.ok(stack);
    });

    xit('can push an element onto the stack', function () {
      let stack = new Fabric.Stack();

      let one = stack.push('foo');
      let two = stack.push('bar');

      assert.equal(one, 1);
      assert.equal(two, 2);
      assert.equal(stack['@data'][0].toString('hex'), samples.output.foo);
      assert.equal(stack['@data'][1].toString('hex'), samples.output.bar);
    });

    xit('mimics JavaScript semantics', function () {
      let stack = new Fabric.Stack();

      stack.push('foo');
      stack.push('bar');

      let last = stack.pop();

      assert.equal(last, 'bar');
    });
  });

  describe('State', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.State instanceof Function, true);
    });

    xit('provides an accurate "@id" attribute', function () {
      let state = new Fabric.State(message['@data']);

      assert.ok(state);
      assert.equal(state.id, message['@id']);
    });

    xit('can serialize to a sane element', function () {
      let state = new Fabric.State(message['@data']);

      assert.ok(state);
      assert.equal(state.id, message['@id']);
      assert.equal(state.serialize(), JSON.stringify(message['@data']));
    });

    xit('can deserialize from a string', function () {
      let state = Fabric.State.fromString(JSON.stringify(message['@data']));

      assert.ok(state);
      assert.equal(state.id, message['@id']);
      assert.equal(state.serialize(), JSON.stringify(message['@data']));
    });
  });

  describe('Store', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Store instanceof Function, true);
    });

    it('can set a key to a string value', async function () {
      let store = new Fabric.Store({
        persistent: false
      });

      await store.start();

      let set = await store.set('example', samples.input.hello);

      await store.stop();

      assert.ok(store);
      assert.equal(typeof set, 'string');
      assert.equal(typeof set, typeof samples.input.hello);
      assert.equal(set, samples.input.hello);
    });

    it('can recover string data after a restart', async function () {
      let store = new Fabric.Store();
      await store.start();
      let set = await store.set('example', samples.input.hello);
      await store.stop();
      await store.start();
      let get = await store.get('example');
      await store.stop();

      assert.ok(store);
      assert.equal(typeof set, 'string');
      assert.equal(typeof set, typeof samples.input.hello);
      assert.equal(set, samples.input.hello);
      assert.equal(typeof get, 'string');
      assert.equal(typeof get, typeof samples.input.hello);
      assert.equal(get, samples.input.hello);
    });

    it('can manage collections', async function () {
      let data = { name: 'widget-alpha' };
      let alt = Object.assign({}, data, { extra: data });
      let store = new Fabric.Store({
        path: './stores/collections',
        persistent: false
      });

      await store.start();

      let before = await store._GET(`/widgets`);
      let posted = await store._POST(`/widgets`, data);
      let entity = await store._GET(posted, data);
      let after = await store._GET(`/widgets`);
      let second = await store._POST(`/widgets`, alt);
      let target = await store._GET(second);
      let result = await store._GET(`/widgets`);

      await store.stop();

      //assert.equal(result.length, 2);
      assert.equal(JSON.stringify(after), JSON.stringify([data]));
      assert.equal(JSON.stringify(result), JSON.stringify([data, alt]));
      //assert.equal(JSON.stringify(entity), JSON.stringify(data));
    });

    it('can manage large collections', async function () {
      let data = { name: 'widget-alpha' };
      let alt = Object.assign({}, data, { extra: data });
      let store = new Fabric.Store({
        path: './stores/collections',
        persistent: false
      });

      await store.start();

      let before = await store._GET(`/widgets`);

      for (let i = 0; i < LARGE_COLLECTION_SIZE; i++) {
        await store._POST(`/widgets`, alt);
      }

      let result = await store._GET(`/widgets`);

      await store.stop();

      assert.equal(result.length, LARGE_COLLECTION_SIZE);
    });
  });

  describe('Transaction', function () {
    xit('is available from @fabric/core', function () {
      assert.equal(Fabric.Transaction instanceof Function, true);
    });
  });

  describe('Vector', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Vector instanceof Function, true);
    });

    xit('can restore from garbage', async function () {
      let vector = Fabric.Vector.fromObjectString('{ "0": { "type": "Buffer", "data": [0, 0, 0, 0 ] } }');
      assert.equal(vector instanceof Array, true);
      assert.equal(vector[0] instanceof Buffer, true);
      assert.equal(vector[0].toString('hex'), '00000000');
      assert.ok(vector);
    });
  });

  describe('Worker', function () {
    xit('is available from @fabric/core', function () {
      assert.equal(Fabric.Worker instanceof Function, true);
    });

    xit('can handle a task', async function () {
      let worker = new Fabric.Worker();
      let result = await worker.compute(1);
      console.log('worker:', worker);
      console.log('result:', result);
    });
  });
});
