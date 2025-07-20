const express = require("express");
const authorise = require("../middleware/auth");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.post(
    "/addcategory",
    authorise.auth,
    authorise.admin,
    categoryController.addCategory
)

router.get(
    "/getAll",
    authorise.auth,
    categoryController.getCategory
)

router
    .route("/:id")
    .get(authorise.auth,categoryController.getCategoryById)
    .put(authorise.auth,authorise.admin,categoryController.updateCategory)
    .delete(authorise.auth,authorise.admin,categoryController.deleteCategory)

module.exports = router;