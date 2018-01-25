'use strict';

var crypto = require('crypto');
var util = require('util');

//var SimplePeer = require('simple-peer');
//var wrtc = require('wrtc');

// to use the Vectorspace as our store (i.e., we're ephemereal)
// var Store = require('./vector');
// otherwise...
//var Stash = require('./stash');

// TODO: configure
var KEY_SIZE = 20; // 20 bytes -> 160 bits for kad addresses

/**
 * An in-memory representation of a node in our network.
 * @param       {Vector} initial - Initialization Vector for this peer.
 * @constructor
 */
 function Peer (init) {
   this['@data'] = init || {};
   this.clock = 0;
   this.stack = [];
   this.known = {};
   this.init();
 }

// could be looked up by name of parameter in #3
util.inherits(Peer, require('./vector'));

Peer.prototype._connect = async function initiate (notify) {
  var self = this;
  console.log('peer connecting...');
  return self;

  self.emit('log', 'peer connecting...');

  var commitment = self._serialize(self['@data']);
  var seed = crypto.randomBytes(KEY_SIZE);
  
  var id = seed;
  var type = '/types/identity'; // path to _lookup()
  //var store = new Stash(); // TODO: eval() ;)
  
  var SimplePeer = require('simple-peer')
  var wrtc = require('wrtc')

  var peer = new SimplePeer({ initiator: true, wrtc: wrtc });
  
  console.log('peer:', peer);
  
  
  /*var me = new SimplePeer({
    initiator: true,
    //wrtc: wrtc
  });*/

  self.emit('log', ['[PEER]', 'emitting (',type,'):', id ]);
  self.emit('identity', id);

  self['@id'] = self['@data'];
  
  //await store.close();

  return self;

  //node.on('error', notify);

}

Peer.prototype.send = function message () {
  
}

module.exports = Peer;
