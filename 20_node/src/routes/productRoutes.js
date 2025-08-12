const express = require('express');
const {createProduct,getAllProduct,getProductById,updateProduct,deleteProduct} = require('../controller/productController')
const router = express.Router();
const {auth,admin} = require('../middleware/auth');

router.post(
        "/",
        auth,
        admin,
        createProduct);
    router.get(
        "/",
        auth,
        getAllProduct);
    router.get(
        "/:id",
        auth,
        getProductById);
    router.put(
        "/:id",
        auth,
        admin,
        updateProduct);
router.delete(
        "/:id",
        auth,
        admin,
        deleteProduct);
module.exports  = router;