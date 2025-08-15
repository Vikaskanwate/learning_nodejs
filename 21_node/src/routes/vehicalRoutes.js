const express = require("express");
const router  = express.Router();
const {createVehical,getAllVehicals} = require('../controller/vehicalController');
router.post("/",createVehical);
router.get("/",getAllVehicals);

module.exports = router;