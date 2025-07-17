const express = require('express');
const {getStudents,addStudent,findStudentById,updateStudent,deleteStudent} = require('../controller/studentController');
const auth = require('../middleware/auth');
const routes = express.Router();

routes.get(
    "/",
    auth.auth,auth.admin,
    getStudents);
routes.post(
    "/",
    auth.auth,auth.admin,
    addStudent);
routes 
    .route("/:id")
    .get(auth.auth,findStudentById)
    .put(auth.auth,updateStudent)
    .delete(auth.auth,auth.admin,deleteStudent)
    
module.exports = routes;