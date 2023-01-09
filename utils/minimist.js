// ARGS (PORT)
const minimist = require('minimist');
const args = minimist(process.argv.slice(2), {
  default: {
    port: 8080,
  },
  alias: {
    p: 'port',
  },
});

module.exports = args;