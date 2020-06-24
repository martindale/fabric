'use strict';

const Fabric = require('../');

console.log("FABRIC", Fabric)

const NETWORK_NAME = 'playnet';
const NODE_COUNT = 3;
const PEERING_PORT = 7450;

/**
 * Simulate a Fabric network based on the constants above.
 * @return {[type]} [description]
 */
async function simulate () {
  let nodes = {};
  let ids = [];

  for (let i = 0; i < NODE_COUNT; i++) {
    let node = new Fabric.Peer({
      port: PEERING_PORT + i
    });

    let id = i; //node.id;

    console.log(`node id:`, id);

    nodes[id] = node;
    ids.push(id);
  }

  console.log('nodes:', nodes);

  for (let id in nodes) {
    console.log(`starting ${id}...`);
    let node = nodes[id];

    node.on('ready', function () {
      console.log(`node ${id} is ready!`);
      let peers = Object.keys(nodes).filter(x => x !== id);
      console.log(`node ${id} knows peers:`, peers);

      for (let i in peers) {
        let peerID = peers[i];
        let address = `${nodes[peerID].address}:${nodes[peerID].port}`;
        console.log(`node ${id} connecting to ${address}...`);
        node._connect(address);
      }
    });

    nodes[id].listen();
  }

  let origin = nodes[ids[0]];
  let message = Fabric.Message.fromVector(['Ping', Date.now() + '']); // ping

  console.log('broadcasting message to all peers:', message);

  origin.broadcast(message);
}

simulate();
