#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())


const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key)=>{
    if(key === '\u0003'){
      process.exit();
    }
  });

  return stdin;
}



// Begin game
game.start();

const { connect } = require('./client');
console.log('Connecting ...');
connect();
setupInput();


