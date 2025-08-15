const express = require("express");
const router  = express.Router();
const {createVehical,getAllVehicals,getVehicalById,updateVehical} = require('../controller/vehicalController');
router.post("/",createVehical);
router.get("/",getAllVehicals);
router.get("/:id",getVehicalById);
router.put("/:id",updateVehical);

module.exports = router;