const express = require('express');
const {createStudent,getAllStudent,getStudentById} = require('../controller/studentController');
const router = express.Router();

router.post('/',createStudent);
router.get("/",getAllStudent);
router.get("/:id",getStudentById);

module.exports = router;