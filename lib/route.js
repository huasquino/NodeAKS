
'use strict';

const Handler = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: Handler.init
  }
];

module.exports = routes;
