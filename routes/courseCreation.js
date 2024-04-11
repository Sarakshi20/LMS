const express = require('express');
const router = express.Router();
const createCourse = require('../controller/courseCreation');

router.post('/',createCourse);

module.exports = router;