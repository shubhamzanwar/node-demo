const { pingHandler } = require('../../src/handlers/pingHandler');

describe('the ping handlerr function', () => {
  it('should return a string', () => {
    expect(typeof pingHandler()).toEqual(typeof '');
  });
  it('should return a string with value pong', () => {
    expect(pingHandler()).toEqual('pong');
  });
});
