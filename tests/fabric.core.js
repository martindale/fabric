'use strict';

// Core
const Fabric = require('../');

// Modules
const Service = require('../lib/service');
// const Schnorr = require('../lib/schnorr');

// Testing
const assert = require('assert');
const crypto = require('crypto');
// const expect = require('chai').expect;

// External libs
const MerkleTree = require('merkletreejs');

// Data
const genesis = require('../data/fabric');
const message = require('../data/message');
const samples = require('../data/samples');

// Opcodes
const OPCODES = require('../data/opcodes');

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
      let seed = new Fabric.Vector(genesis['@data']);

      assert.equal(seed.id, genesis['@id']);
      assert.equal(seed.id, samples.output.fabric);
      assert.equal(seed['@id'], samples.names.fabric);
      assert.equal(seed['@id'], genesis['@id']);
    });


    it('serializes strings correctly', async function () {
      let state = new Fabric.State('Hello, world!');
      let hash = crypto.createHash('sha256').update('"Hello, world!"', 'utf8').digest('hex');
      let rendered = state.serialize();

      assert.equal(rendered.toString(), '"Hello, world!"');
      assert.equal(state.id, samples.output.hello);
      assert.equal(state['@data'], samples.input.bare);
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
      let state = new Fabric.State('Hello, world!');
      let hash = crypto.createHash('sha256').update('"Hello, world!"', 'utf8').digest('hex');
      let rendered = state.render();
      let reconstructed = Fabric.State.fromString('"Hello, world!"');

      assert.equal(state.id, samples.output.hello);
      assert.equal(state.id, hash);
      assert.equal(rendered, buffer.toString());
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
        path: './data/test',
        persistent: false
      });

      await fabric.start();

      let set = await fabric._SET('assets/test', buffer);
      let get = await fabric._GET('assets/test');

      await fabric.stop();

      assert.equal(set.toString('utf8'), buffer.toString('utf8'));
      assert.equal(get.constructor.name, 'Buffer');
      assert.equal(get.toString(), buffer.toString());
      assert.equal(get.toString('hex'), buffer.toString('hex'));
      assert.equal(get.toString(), message['@data']);
    });

    it('can store and retrieve an array', async function () {
      let array = [message['@data']];
      let fabric = new Fabric({
        path: './data/secondary',
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
        path: './data/strings',
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
        path: './data/blob',
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

  describe('Block', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Block instanceof Function, true);
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

    it('generates a merkle tree with the expected proof of inclusion', async function () {
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

    it('manages a collection of objects', async function () {
      let set = new Fabric.Collection();

      set.push('Α');
      set.push('Ω');

      let populated = await set.populate();

      assert.equal(JSON.stringify(populated), '["Α","Ω"]');
      assert.equal(set.render(), '["458427041fd034d6363a459998b3dce381e1e35517d6c7fbf5464904d4e6a240","81ada254356134f629692f3e740667f4da398e8ea45b22d1cd8c005b6b289c83"]');
    });
  });

  describe('Disk', function () {
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Disk instanceof Function, true);
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
      let sample = new Fabric.Ledger({ path: './data/tests' });

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

    xit('can compute a value', async function prove () {
      // TODO: use Fabric itself
      let machine = new Fabric.Machine(false);

      // TODO: use Fabric instead of Fabric.Machine
      machine.define('OP_TRUE', OPCODES.OP_TRUE);

      // fabric.push('OP_TRUE');
      machine.script.push('OP_TRUE');

      await machine.start();
      await machine.compute();
      await machine.stop();

      assert.equal(machine.state.id, samples.names.encodedStackWithSingleValidFrame);
      assert.equal(machine.state['@data'][0], true);
    });

    xit('can correctly sum two values', async function prove () {
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

    xit('can correctly sum three values', async function prove () {
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

    xit('can use _SET', async function () {
      let oracle = new Fabric.Oracle();

      await oracle.start();
      await oracle._SET('sample', message['@data']);
      await oracle.stop();

      assert.ok(oracle);
    });

    xit('can store a string value', async function () {
      let oracle = new Fabric.Oracle();

      await oracle.start();
      let set = await oracle._SET('sample', message['@data']);
      let get = await oracle._GET('sample');
      await oracle.stop();

      console.log('set:', set);
      console.log('get:', get);

      assert.ok(oracle);
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

    xit('can create an instance', async function provenance () {
      let service = new Service({
        name: 'Test'
      });

      assert.ok(service);
    });

    xit('can start offering service', function (done) {
      let service = new Service();

      async function main () {
        await service.start();
        await service.stop();
        assert.ok(service);
        done();
      }

      main();
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
      let store = new Fabric.Store({
        path: './data/collections',
        persistent: false
      });

      await store.start();

      let posted = await store._POST(`/widgets`, data);
      console.log('posted:', posted);
      let after = await store._GET(`/widgets`);
      let state = await store._GET(posted);
      let second = await store._POST(`/widgets`, Object.assign({}, data, { extra: data }));
      let target = await store._GET(second);
      let result = await store._GET(`/widgets`);
      let sample = new Fabric.State(result);

      await store.stop();

      console.log('collection test:', after);

      assert.equal(JSON.stringify(after), JSON.stringify([data]));
      assert.equal(JSON.stringify(state), JSON.stringify(data));
    });
  });

  describe('Transaction', function () {
    it('is available from @fabric/core', function () {
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
    it('is available from @fabric/core', function () {
      assert.equal(Fabric.Worker instanceof Function, true);
    });
  });
});
