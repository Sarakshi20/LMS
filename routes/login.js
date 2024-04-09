const express = require('express');
const loginUser = require('../controller/loginUser');
const routes = express.Router();

routes.post('/',loginUser);

module.exports = routes;