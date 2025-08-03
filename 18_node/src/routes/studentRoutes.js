const express = require('express');
const {auth,admin} = require('../middleware/auth')
const {createStudent,getAllStudent,getStudentById,updateStudent,deleteStudent} = require('../controller/studentController');
const router = express.Router();

router.post(
    '/',
    auth,
    admin,
    createStudent);
router.get(
    "/",
    auth,
    getAllStudent);
router.get(
    "/:id",
    auth,
    getStudentById);
router.put(
    "/:id",
    auth,
    admin,
    updateStudent);
router.delete(
    "/:id",
    auth,
    admin,
    deleteStudent);

module.exports = router;