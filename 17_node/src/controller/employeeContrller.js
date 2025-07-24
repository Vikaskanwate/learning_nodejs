const employeemodel = require('../modules/employee');


async function createEmployee(req,res){
    try{
        const {name,department,designation,salary} = req.body;
        const emp = await employeemodel.findOne({name});
        if(!emp){
            const newEmp = new employeemodel({
                name,
                department,
                designation,
                salary
            });

            await newEmp.save();
            res.status(201).json({
                emp:newEmp
            })
        }else{
            res.status(400).json({
                message:"employee already exists"
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    createEmployee
}