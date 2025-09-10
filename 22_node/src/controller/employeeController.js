const employeemodel = require('../models/employee');
const mongoose = require('mongoose');

const createEmployee = async (req,res)=>{
    const {name,designation,department,salary} = req.body;
    try{

    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const getAllEmployee = async ()=>{
    try{
        const employee = await employeemodel.find();
        if(employee){
            return res.status(200).json({
                employee:employee,
                success:true
            })
        }
        return res.status(404).json({
            msg:"Employee not found"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


module.exports = {
    createEmployee,
    getAllEmployee
}