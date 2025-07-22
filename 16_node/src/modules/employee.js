const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    salary:{
        type:Number,
    },
    department:{
        type:String
    },
    designation:{
        type:String
    }
})

module.exports = mongoose.model("Employee",employeeSchema);