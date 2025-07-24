const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    department:{
        type:String
    },
    designation:{
        type:String
    },
    salary:{
        type:Number
    }
})


module.exports = mongoose.model("Employee",employeeSchema);