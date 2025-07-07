const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    salay:{
        type:String
    },
    department:{
        type:String
    }
})

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;