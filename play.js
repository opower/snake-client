#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start();

const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();
