const express = require('express');
const {createEmployee,getAllEmployee,getEmployeeById,updatEmployee,deleteEmployee} = require('../controller/employeeController');
const {auth,manager} = require('../middleware/auth');
const router = express.Router();

router.post(
    "/",
    auth,
    manager,
    createEmployee
);
router.get(
    "/",
    auth,
    manager,
    getAllEmployee
);
router.get(
    "/:id",
    auth,
    getEmployeeById
);
router.put(
    "/:id",
    auth,
    manager,
    updatEmployee
);
router.delete(
    "/:id",
    auth,
    manager,
    deleteEmployee
);

module.exports = router;