const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', ()=>{
    console.log('Successfully Connected!');
    conn.write("Name: OPO");
    //conn.write("Move: up");
  });
  conn.on('connect', ()=>{
    setInterval(()=>{
      //conn.write("Move: up");
    }, 50);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};
module.exports = {connect};
