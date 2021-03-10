handleUserInput = key => {
  if (key === '\u0003') {
  console.log('Wow you quit already?')
  process.exit();
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };