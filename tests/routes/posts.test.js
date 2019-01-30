const axios = require('axios');
const { server } = require('../../server');

describe('the GET /posts route', () => {
  const mockPosts = [{
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  }];
  let getMock;

  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => mockPosts);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/posts',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
  });
  it('should respond with an array of posts', async () => {
    const options = {
      method: 'GET',
      url: '/posts',
    };
    const response = await server.inject(options);
    expect(response.result instanceof Array).toEqual(true);
    expect(response.result).toEqual(mockPosts);
  });
});
