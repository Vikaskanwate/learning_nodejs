const express = require('express');
const {createProduct} = require('../controller/productController')
const router = express.Router();


router.get("/",createProduct);

module.exports  = router;