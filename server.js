const Hapi = require('hapi');

const server = new Hapi.Server({
  port: 8081,
  host: '0.0.0.0',
});

module.exports = {
  server,
};
