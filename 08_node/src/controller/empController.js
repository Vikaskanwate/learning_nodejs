const employee = require('../models/employee');

const getAllEmployee = async(req,res) =>{
    try{
        const emp = await employee.find({});
        return res.status(200).json({
            employees:emp
        }) 
    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}


module.exports = {
    getAllEmployee,
}