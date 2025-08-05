const express = require('express');
const {createEmployee,getAllEmployee} = require('../controller/employeeController');
const router = express.Router();

router.post("/",createEmployee);
router.get("/",getAllEmployee);

module.exports = router;