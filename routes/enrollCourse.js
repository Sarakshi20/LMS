const express = require('express');
const router = express.Router();
const enrollCourse = require('../controller/enrollCourse');

router.post('/enrollCourse',enrollCourse);

module.exports = router;