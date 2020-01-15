let connection = undefined;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key)=>{
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'd') {
      conn.write('Move: right');
    } else if (key === 'z') {
      conn.write('Say: hi!');
    } else if (key === 'o') {
      conn.write('Say: pew pew');
    }
  });

  return stdin;
};


module.exports = { setupInput};
