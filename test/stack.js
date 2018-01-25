var assert = require('assert');
var expect = require('chai').expect;

var Fabric = require('../');

describe('Stack', function () {
  it('should correctly compute a known instruction', async function () {
    var fabric = new Fabric();

    fabric.use('OP_TEST', function (state) {
      return true;
    });

    fabric.stack.push('OP_TEST');

    fabric.compute();

    await fabric.chain.storage.close();

    assert.equal(fabric['@data'], true);
    assert.equal(fabric.clock, 1);
  });

  it('can add two numbers', async function () {
    var fabric = new Fabric();

    fabric.use('ADD', function (state) {
      var op = this.stack.pop();
      var a = this.stack.pop();
      var b = this.stack.pop();
      return parseInt(a) + parseInt(b);
    });

    fabric.stack.push('1');
    fabric.stack.push('1');
    fabric.stack.push('ADD');

    fabric.compute();

    await fabric.chain.storage.close();

    assert.equal(fabric['@data'], 2);
    assert.equal(fabric.clock, 1);
  });

  it('can add two other numbers', async function () {
    var fabric = new Fabric();

    fabric.use('ADD', function (state) {
      var op = this.stack.pop();
      var a = this.stack.pop();
      var b = this.stack.pop();
      return parseInt(a) + parseInt(b);
    });

    fabric.stack.push('123');
    fabric.stack.push('456');
    fabric.stack.push('ADD');

    fabric.compute();
    
    await fabric.chain.storage.close();

    assert.equal(fabric['@data'], 579);
    assert.equal(fabric.clock, 1);
  });

  it('can retrieve a function signature', function () {
    function adder (state) {
      var op = this.stack.pop();
      var a = this.stack.pop();
      var b = this.stack.pop();
      return parseInt(a) + parseInt(b);
    }

    var data = JSON.stringify(adder, function(key, val) {
      if (typeof val === 'function') {
        return val + '';
      }
      return val;
    });

    var fabric = new Fabric();
    var signature = new Fabric.Vector();

    fabric.use('ADD', signature._sign()['@id']);
    
    console.log('fabric:', fabric);

    fabric.stack.push('1');
    fabric.stack.push('1');
    fabric.stack.push('ADD');

    fabric.compute();

    assert.equal(fabric['@data'], 2);
    assert.equal(fabric.clock, 1);
  });
});
