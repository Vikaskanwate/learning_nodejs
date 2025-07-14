const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
router.get(
    "/sample",
    auth.auth,
    auth.admin,
    (req,res)=>{
    return res.status(200).json({
        message:"welcome admin"
    });
})

router.get(
    "/sample2",
    auth.auth,
    (req,res)=>{
    return res.status(200).json({
        message:"welcom user"
    })
})

module.exports = router;