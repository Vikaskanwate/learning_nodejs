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
            return res.status(400).json({
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

async function getAllEmployee(req,res){
    try{
        const emp = await employeemodel.find({});
        if(!emp){
            return res.status(404).json({
                emp:"Employee not found"
            })
        }
        res.status(200).json({
            emp:emp
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        })
    }
}

async function  updateEmployee(req,res) {
    const {name,department,designation,salary} = req.body;
    const {id} = req.params;
    console.log(req.body);
    try{
        const emp = await employeemodel.findById(id);

        if(!emp){
            return res.status(404).json({
                emp:"Employee not found"
            })
        }
        emp.name = name || emp.name;
        emp.department = department || emp.department;
        emp.designation = designation || emp.designation;
        emp.salary = salary || emp.salary;
        
        await emp.save();
        res.status(200).json({
            emp:emp
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        })  
    }
}

async function deleteEmployee(req,res){
    const {id} = req.params;
    try{
        const deletedEmp = await employeemodel.findByIdAndDelete(id);
        if(!deletedEmp){
            return res.status(404).json({
                emp:"Employee not found"
            })
        }
        res.status(200).json({
            message:"Employee deleted successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        });
    }
}

async function getEmployeeById(req,res) {
    const {id} = req.params;
    try{
        const emp = await employeemodel.findById(id);
        if(!emp){
            return res.status(404).json({
                emp:"Employee not found"
            })
        }
        res.status(200).json({
            employee:emp,
            success:true
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err
        });
    }
}

module.exports = {
    createEmployee,
    getAllEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
}