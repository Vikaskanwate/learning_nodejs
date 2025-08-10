const express = require('express');
const {createProduct,getAllProduct,getProductById} = require('../controller/productController')
const router = express.Router();


router.post("/",createProduct);
router.get("/",getAllProduct);
router.get("/:id",getProductById);
module.exports  = router;