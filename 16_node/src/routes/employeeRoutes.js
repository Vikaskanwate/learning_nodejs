const express = require('express');
const {getAllEmployee,createEmployee,updateEmployee,getEmployeeById,deleteEmployee} = require('../controller/emplyeeController')
const  router = express.Router();

router.get("/",getAllEmployee);
router.post("/",createEmployee);
router.put("/:id",updateEmployee);
router.get("/:id",getEmployeeById);
router.delete("/:id",deleteEmployee);


module.exports = router;