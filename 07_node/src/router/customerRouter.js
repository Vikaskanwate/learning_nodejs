const express = require('express');
const router  = express.Router();
const {getCustomers, createCustomer, updateCustomer, deleteCustomer} = require('../controller/customerController');

router.get("/",getCustomers);
router.post('/',createCustomer);
router.put("/update/:id",updateCustomer);
router.delete("/delete/:id",deleteCustomer);

module.exports = router;