'use strict';

// Dependencies
const Peer = require('../types/peer');
const Swarm = require('../types/swarm');
const Message = require('../types/message');

// Configuration
const settings = {
  seeds: ['localhost:7777'],
  //peers: ['localhost:7777','localhost:7778'],
};

async function main () {
  // Create a Hub (seeder peer) and a Swarm (peer cluster)
  let seeder = new Peer({ listen: true });
  //let seeder2 = new Peer({ listen: true, port:7778 });



  // Listeners
  seeder.on('message', async function handleHubMessage (msg) {
    console.log('[EXAMPLES:SWARM]', 'Got message on Seed node:', msg.raw);
  });
  seeder.on('socket:data', async function debugSocketData (data) {
    console.log('[EXAMPLES:SWARM]', 'Seeder agent received data:', data);
  });
  //seeder2.on('message', async function handleHubMessage (msg) {
    //console.log('[EXAMPLES:SWARM]', 'Got message on Seed2 node:', msg.raw);
  //});
  // Start component services
  console.log('[EXAMPLES:SWARM]', 'Starting seeder Peer...');
  await seeder.start();



  let swarm = new Swarm(settings);
  swarm.on('message', async function handleSwarmMessage (msg) {
    console.log('[EXAMPLES:SWARM]', 'Got message on Swarm:', msg.raw);
  });
  swarm.on('socket:data', async function debugSocketData (data) {
    console.log('[EXAMPLES:SWARM]', 'Swarm agent received data:', data);
  });

  let swarm2 = new Swarm(settings);
  swarm2.on('message', async function handleSwarmMessage2 (msg) {
    console.log('[EXAMPLES:SWARM]', 'Got message on Swarm2:', msg.raw);
  });
  swarm2.on('socket:data', async function debugSocketData2 (data) {
    console.log('[EXAMPLES:SWARM]', 'Swarm2 agent received data:', data);
  });

  //console.log('[EXAMPLES:SWARM]', 'Starting seeder2 Peer...');
  //await seeder2.start();

  console.log('[EXAMPLES:SWARM]', 'Seeder peer started!');

  console.log('[EXAMPLES:SWARM]', 'Starting Swarm...');
  await swarm.start();
  await swarm2.start();
  console.log('[EXAMPLES:SWARM]', 'Swarm started!');

  // TODO: create entities on seed node
  // TODO: receive entities from seed node
  // TODO: create entities on swarm instance

  // Send Regular Updates (outside of internal ping/pong)
  let heartbeat = setInterval(function () {
    console.warn('[EXAMPLES:SWARM]', 'Starting to send interval message...');
    let message = Message.fromVector(['Generic', Date.now().toString()]);
    console.log('[EXAMPLES:SWARM]', 'Sending :', message.raw);
    seeder.broadcast(message);

    //swarm.broadcast(message);
  }, 5000);
}

main().catch(function exceptionHandler (exception) {
  console.error('[EXAMPLES:SWARM]', 'Main process threw Exception:', exception);
});
