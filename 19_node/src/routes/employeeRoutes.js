const express = require('express');
const {createEmployee,getAllEmployee,getEmployeeById} = require('../controller/employeeController');
const router = express.Router();

router.post("/",createEmployee);
router.get("/",getAllEmployee);
router.get("/:id",getEmployeeById);

module.exports = router;