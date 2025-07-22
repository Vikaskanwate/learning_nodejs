const express = require('express');
const {getAllEmployee,createEmployee,updateEmployee,getEmployeeById,deleteEmployee} = require('../controller/emplyeeController')
const  router = express.Router();
const auth = require('../middleware/auth');
router.get(
    "/",
    auth.auth,
    auth.admin,
    getAllEmployee);
router.post(
    "/",
    auth.auth,
    auth.admin,
    createEmployee);
router.put("/:id",updateEmployee);
router.get("/:id",getEmployeeById);
router.delete("/:id",deleteEmployee);


module.exports = router;