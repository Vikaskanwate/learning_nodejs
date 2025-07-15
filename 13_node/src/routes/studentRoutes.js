const express = require('express');
const {getStudents,addStudent,findStudentById} = require('../controller/studentController');
const routes = express.Router();

routes.get("/",getStudents);
routes.post("/",addStudent);
routes 
    .route("/:id")
    .get(findStudentById)
    
module.exports = routes;