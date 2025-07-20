const express = require('express');
const productController = require("../controller/productController");
const authorise = require('../middleware/auth');
const router = express.Router();

router.post(
    "/creatproduct",
    authorise.auth,
    authorise.admin,
    productController.createProduct
);

router.get(
    "/getAllProduct",
    authorise.auth,
    productController.getAllProduct
);

router
    .route("/:id")
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;