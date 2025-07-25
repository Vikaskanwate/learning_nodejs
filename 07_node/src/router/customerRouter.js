const express = require('express');
const router  = express.Router();
const {getCustomers, createCustomer, updateCustomer, deleteCustomer} = require('../controller/customerController');

router.get("/",getCustomers);
router.post('/',createCustomer);

router
        .route("/:id")
        .put(updateCustomer)
        .delete(deleteCustomer);

module.exports = router;