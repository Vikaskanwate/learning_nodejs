const express = require("express");
const router  = express.Router();
const {createVehical,getAllVehicals,getVehicalById,updateVehical,deleteVehical} = require('../controller/vehicalController');
router.post("/",createVehical);
router.get("/",getAllVehicals);
router.get("/:id",getVehicalById);
router.put("/:id",updateVehical);
router.delete("/:id",deleteVehical);

module.exports = router;