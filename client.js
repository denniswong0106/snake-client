const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', data => {
    console.log('sucessfully connected to game server')
    conn.write('Name: -_-');
  });
  conn.on('connect', () => {
    conn.write('Move: up');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = {connect};