const express = require('express');
const {createEmployee} = require('../controller/employeeController');
const router = express.Router();

router.post("/",createEmployee);

module.exports = router;