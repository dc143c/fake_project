const express = require('express');
const routes = express.Router();

routes.use('/users/', require('./users'))
routes.use('/posts/', require('./posts'))

module.exports = routes;