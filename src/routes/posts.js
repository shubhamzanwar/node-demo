const { getPosts } = require('../handlers/postsHandlers');

module.exports = [{
  path: '/posts',
  method: 'GET',
  handler: getPosts,
}];
