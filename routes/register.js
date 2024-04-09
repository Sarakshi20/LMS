const express = require('express');
const routes = express.Router();
const registerUser = require('../controller/registerUser');

routes.post('/', registerUser);

module.exports = routes;