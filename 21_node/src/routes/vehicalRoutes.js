const express = require("express");
const router  = express.Router();
const {createVehical,getAllVehicals,getVehicalById} = require('../controller/vehicalController');
router.post("/",createVehical);
router.get("/",getAllVehicals);
router.get("/:id",getVehicalById);

module.exports = router;