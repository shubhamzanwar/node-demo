const pingRoutes = require('./ping');
const postRoutes = require('./posts');

module.exports = [
  ...pingRoutes,
  ...postRoutes,
];
