const axios = require('axios');

module.exports = {
  getPosts: async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return posts;
  },
};
