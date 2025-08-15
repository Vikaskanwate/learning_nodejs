const vehicalmodel = require('../models/vehical');

const createVehical = async (req,res)=>{
    const {vehicalName,type,brandName,price} = req.body;
    try {
        const vehical = await vehicalmodel.findOne({vehicalName});
        if(!vehical){
            const newVehical = new vehicalmodel({
                vehicalName,type,brandName,price 
            })
            await newVehical.save();
            return res.status(201).json({
                vehical:newVehical,
                success:true
            })
        }
        return res.status(400).json({
            msg:"vehical already exists",
            success:false
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const getAllVehicals = async (req,res)=>{
    try {
        const vehicals = await vehicalmodel.find();
        if(vehicals){
            return res.status(200).json({
                vehicals:vehicals,
                success:true
            })
        }
        return res.status(404).json({
            msg:"vehicals not found"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

module.exports = {
    createVehical,
    getAllVehicals
}