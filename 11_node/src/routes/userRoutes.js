const express = require('express');

const router = express.Router();

router.get("/admin",(req,res)=>{
    res.json({
        message:"welcome Admin"
    });
})

router.get("/manager",(req,res)=>{
    res.json({
        message:"welcome manager"
    });
})


router.get("/user",(req,res)=>{
    res.json({
        message:"welcome user"
    });
})

module.exports = router