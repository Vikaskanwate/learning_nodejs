const express = require('express');
const {createStudent,getAllStudent,getStudentById,updateStudent,deleteStudent} = require('../controller/studentController');
const router = express.Router();

router.post('/',createStudent);
router.get("/",getAllStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router;