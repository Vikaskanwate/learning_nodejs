const express = require('express');
const router = express.Router();
const {createEmployee, getAllEmployee, updateEmployee,deleteEmployee,getEmployeeById} = require('../controller/employeeController');

router.post("/",createEmployee);
router.get("/",getAllEmployee);
router.put("/:id",updateEmployee)
router.delete("/:id",deleteEmployee);
router.get("/:id",getEmployeeById);

module.exports = router;