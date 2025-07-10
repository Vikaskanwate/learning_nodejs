const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    salary:{
        type:String
    },
    department:{
        type:String
    }
})

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;