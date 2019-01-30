const { getPosts } = require('../helpers/getPosts');

module.exports = {
  getPosts: async (request, h) => {
    const posts = await getPosts();
    return h.response(posts);
  },
};
