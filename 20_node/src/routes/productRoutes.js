const express = require('express');
const {createProduct,getAllProduct,getProductById,updateProduct} = require('../controller/productController')
const router = express.Router();


router.post("/",createProduct);
router.get("/",getAllProduct);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
module.exports  = router;