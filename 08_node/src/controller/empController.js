const employee = require('../models/employee');

const getAllEmployee = async (req, res) => {
    try {
        const emp = await employee.find({});
        return res.status(200).json({
            employees: emp
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const createEmployee = async (req, res) => {
    try {
        const { firstName, lastName, salary, department } = req.body;
        const newEmployee = new employee({
            firstName,
            lastName,
            salary,
            department
        });
        await newEmployee.save();
        return res.status(200).json({
            employee: newEmployee
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const { firstName, lastName, salary, department } = req.body;
        const updateEmployee = await employee.findByIdAndUpdate(id, { firstName, lastName, salary, department }, { new: true });
        return res.status(200).json({
            employee: updateEmployee
        })
    } catch (err) {
        console.log(err);
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const deleteEmployee = async (req, res) => {
    try {        
        const {id} = req.params;
        
        const deleted = await employee.findByIdAndDelete(id);
        
        if (!deleted) {
            return res.status(404).json({
                status: "product not found"
            });
        }
        return res.status(200).json({
            status: "product deleted successfully"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
       });
    }
}

module.exports = {
    getAllEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
}