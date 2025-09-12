const {getAllEmployee,createEmployee} = require('../controller/employeeController');

const express = require('express');

const router = express.Router();

router.post("/",createEmployee);
router.get("/",getAllEmployee);

 module.exports = router;