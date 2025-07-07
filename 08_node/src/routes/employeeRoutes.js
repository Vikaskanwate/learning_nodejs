const express = require('express');
const emp = require('../controller/empController')
const router = express.Router();

router.get("/",emp.getAllEmployee);


module.exports = router;