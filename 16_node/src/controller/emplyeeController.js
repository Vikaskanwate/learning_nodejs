const employeemodel = require('../modules/employee');

async function getAllEmployee(req,res){
    try{
        const emp = await employeemodel.find({});
        if(emp){
            res.status(200).json({
                employees:emp
            })
        }
        res.status(404).json({
            msg:"no employee"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }   
}

async function createEmployee(req,res){
    const {name,salary,department,designation} = req.body;
    try{
        const existingEmp = await employeemodel.findOne({name});
        if(!existingEmp){
            const newEmp = new employeemodel({
                name,
                salary,
                department,
                designation
            });
            res.status(201).json({
                emp:newEmp
            })
            await newEmp.save();
        }
        res.status(400).json({
            message:"employee exists"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

async function updateEmployee(req,res){
    const {name,salary,department,designation} = req.body;
    const {id} = req.params;
    try{
        const emp = await employeemodel.findByIdAndUpdate(id)
        if(!emp){
            res.status(404).json({
                message:"employee not found"
            });
        }
        emp.name = name || emp.name;
        emp.salary = salary || emp.salary;
        emp.department = department || emp.department;
        emp.designation = designation || emp.designation;
        await emp.save();
        res.status(201).json({
            message:"employee updated successfully"
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

async function getEmployeeById(req,res) {
    const {id} = req.params;

    try{
        const emp = await employeemodel.findById(id);
        if(!emp){
            res.status(404).json({
                message:"employee not found"
            });
        }
        res.status(200).json({
            employee:emp
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

async function deleteEmployee(req,res) {
    const {id} = req.params;
    try{
        const emp = await employeemodel.findByIdAndDelete(id);
        if(!emp){
            res.status(404).json({
                message:"employee not found"
            });
        }
        res.status(200).json({
            message:"employee deleted successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports = {
    getAllEmployee,
    createEmployee,
    updateEmployee,
    getEmployeeById,
    deleteEmployee
}