const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {createEmployee, getAllEmployee, updateEmployee,deleteEmployee,getEmployeeById} = require('../controller/employeeController');

router.post(
    "/",
    auth.auth,
    auth.admin,
    createEmployee).get(
        "/",
        auth.auth,
        auth.admin,
        getAllEmployee);
router
    .route
    .get(
        "/:id",
        auth.auth
        ,getEmployeeById)
    .put(
        "/:id",
        auth.auth,
        auth.admin,
        updateEmployee)
    .delete("/:id",
        auth.auth,
        auth.admin,
        deleteEmployee);

module.exports = router;