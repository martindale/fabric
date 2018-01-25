var assert = require('assert');
var expect = require('chai').expect;

var Fabric = require('../');

describe('App', function () {

  it('should expose a constructor', function () {
    assert.equal(typeof Fabric.App, 'function');
  });

  it('should create an application smoothly', async function () {
    var app = new Fabric.App();

    try {
      await app.tips.close();
      await app.stash.close();
    } catch (e) {
      assert.ok(!e);
    }

    assert.ok(app);
  });

  it('should load data from an oracle', async function () {
    var oracle = new Fabric.Oracle({
      path: './data/oracle'
    });

    await oracle._load('./resources');

    console.log('oracle:', oracle);
    var resources = await oracle._OPTIONS('/');
    
    console.log('resources from OPTIONS request:', resources);

    var app = new Fabric.App();

    await app._defer(oracle);
    //await app._explore();

    await app.tips.close();
    await app.stash.close();

    await oracle.storage.close();
    
    console.log('finally:');

    assert.ok(oracle);
    assert.ok(app);
  });
});
