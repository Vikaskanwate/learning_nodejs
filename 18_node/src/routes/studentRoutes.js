const express = require('express');
const {createStudent,getAllStudent,getStudentById,updateStudent} = require('../controller/studentController');
const router = express.Router();

router.post('/',createStudent);
router.get("/",getAllStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);

module.exports = router;