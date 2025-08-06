const employeemodel = require('../models/employee');
const createEmployee = async (req, res) => {
    const { name, designation, department, salary } = req.body;
    try {
        const emp = await employeemodel.findOne({ name });
        if (!emp) {
            const newEmp = new employeemodel({
                name,
                designation,
                department,
                salary
            });

            await newEmp.save();
            return res.status.json({
                newEmployee: newEmp,
                success: true
            })
        }
        return res.status(400).json({
            msg: "Employee already exists"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const emp = await employeemodel.find({});
        if(!emp){
            res.status(400).json({
                msg:"Employees does not exists"
            })
        }
        return res.status(200).json({
            employees:emp
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

const getEmployeeById = async (req,res)=>{
    try{
        const {id} = req.params;
        const emp = await employeemodel.findById(id);
        if(!emp){
            return res.status(400).json({
                msg:"employee not found"
            })
        }
        return res.status(200).json({
            employee:emp,
            success:true
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

const updatEmployee  = async (req,res) =>{
    try{
        const {id} = req.params;
        const { name, designation, department, salary } = req.body;
        const emp = await employeemodel.findById(id);
        if(!emp){
            return res.status(400).json({
                msg:"Employee does not exists"
            })
        }
        emp.name = name || emp.name;
        emp.designation = designation || emp.designation;
        emp.department = department || emp.department;
        emp.salary = salary || emp.salary;

        return res.status(200).json({
            employee:emp,
            success:true
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updatEmployee
}