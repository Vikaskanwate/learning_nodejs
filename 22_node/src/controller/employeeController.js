const employeemodel = require('../models/employee');
const mongoose = require('mongoose');

const createEmployee = async (req, res) => {
    const { name, designation, department, salary } = req.body;
    try {
        const employee = await employeemodel.findOne({ name });
        if (!employee) {
            const newEmployee = new employeemodel({
                name, designation, department, salary
            })
            await newEmployee.save();
            return res.status(201).json({
                employee: newEmployee,
                success: true
            })
        }
        return res.status(400).json({
            msg: "Employee already exists",
            success: false
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
        const employee = await employeemodel.find();
        if (employee) {
            return res.status(200).json({
                employee: employee,
                success: true
            })
        }
        return res.status(404).json({
            msg: "Employee not found"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

const getEmployeeById = async(req, res)


module.exports = {
    createEmployee,
    getAllEmployee
}