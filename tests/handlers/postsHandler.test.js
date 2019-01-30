const axios = require('axios');
const { getPosts } = require('../../src/handlers/postsHandlers');

describe('the get posts handler', () => {
  const mockReplyInterface = {
    response: jest.fn().mockImplementation(x => x),
  };
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

  it('should call the getPosts helper', async () => {
    const response = await getPosts({}, mockReplyInterface);
    expect(response).toEqual(mockPosts);
    expect(getMock).toHaveBeenCalled();
    expect(mockReplyInterface.response).toHaveBeenCalledWith(mockPosts);
  });
});
