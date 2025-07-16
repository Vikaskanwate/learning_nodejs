const express = require('express');
const {getStudents,addStudent,findStudentById,updateStudent,deleteStudent} = require('../controller/studentController');
const routes = express.Router();

routes.get("/",getStudents);
routes.post("/",addStudent);
routes 
    .route("/:id")
    .get(findStudentById)
    .put(updateStudent)
    .delete(deleteStudent)
    
module.exports = routes;