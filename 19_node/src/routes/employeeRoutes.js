const express = require('express');
const {createEmployee,getAllEmployee,getEmployeeById,updatEmployee,deleteEmployee} = require('../controller/employeeController');
const router = express.Router();

router.post("/",createEmployee);
router.get("/",getAllEmployee);
router.get("/:id",getEmployeeById);
router.put("/:id",updatEmployee);
router.delete("/:id",deleteEmployee);
module.exports = router;