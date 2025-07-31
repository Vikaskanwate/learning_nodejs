const express = require('express');
const {createStudent} = require('../controller/studentController');
const router = express.Router();

router.post('/',createStudent);

module.exports = router;