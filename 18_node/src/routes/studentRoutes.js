const express = require('express');
const {createStudent,getAllStudent} = require('../controller/studentController');
const router = express.Router();

router.post('/',createStudent);
router.get("/",getAllStudent);

module.exports = router;