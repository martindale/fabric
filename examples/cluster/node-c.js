'use strict';

const SEED = process.env.SEED || 'frown equal zero tackle relief shallow leisure diet roast festival good plunge pencil virus vote property blame random bacon rich ecology major survey slice';
const PORT = process.env.PORT || 3337;

// Dependencies
const Peer = require('../../types/peer');
const Message = require('../../types/message');

async function main () {
  const peer = new Peer({
    port: PORT,
    listen: true,
    wallet: {
      seed: SEED
    },
    peers: ['localhost:3336']
  });

  // Core functionality (wait for peer, send message)
  peer.on('peer:candidate', async function (peer) {
    console.log('[EXAMPLES:RELAY]', 'Peer "C" emitted "peer:candidate" event:', peer);

    if (peer.id === PEER_ID) {
      console.warn('[EXAMPLES:RELAY]', 'Peer event was destination peer!');
      console.warn('[EXAMPLES:RELAY]', 'Known peers:', peer.peers);

      // Send Message
      let message = Message.fromVector(['Generic', 'Hello, world!']);
      await peer.broadcast(message);
    }
  });

  // Listeners
  peer.on('message', async function handleHubMessage (msg) {
    console.log('[EXAMPLES:RELAY]', 'Got message on origin:', msg.type, msg.body.toString('utf8'));
  });

  // Start component services
  console.warn('[EXAMPLES:RELAY]', 'Starting Peer "C"...');
  await peer.start();
  console.log('[EXAMPLES:RELAY]', 'Peer "C" started!');
}

main().catch(function exceptionHandler (exception) {
  console.error('[EXAMPLES:RELAY]', 'Main process threw Exception:', exception);
});