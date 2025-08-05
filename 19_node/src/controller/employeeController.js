const employeemodel = require('../models/employee');
const createEmployee = async (req,res) =>{
    const {name,designation,department,salary} = req.body;
    try{
        const emp = await employeemodel.findOne({name});
        if(!emp){
            const newEmp = new employeemodel({
                name,
                designation,
                department,
                salary
            });

            await newEmp.save();
            return res.status.json({
                newEmployee:newEmp,
                success:true
            })
        }
        return res.status(400).json({
            msg:"Employee already exists"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

module.exports = {
    createEmployee
}