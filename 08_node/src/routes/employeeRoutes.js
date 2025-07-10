const express = require('express');
const emp = require('../controller/empController')
const router = express.Router();

router.get("/",emp.getAllEmployee).post("/",emp.createEmployee);

router
    .route("/:id")
    .put(emp.updateEmployee)
    .delete(emp.deleteEmployee)


module.exports = router;