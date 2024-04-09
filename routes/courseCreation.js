const express = require('express');
const createCourse = require('../controller/courseCreation');
const checkAdmin = require('../middlewares/checkAdmin');
const  router = express.Router();

router.post('/',checkAdmin,createCourse);