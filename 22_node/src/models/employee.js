const mongoose = require('mongoose');

const employeeShema = new mongoose.Schema({
    name:{
        type:String,
    },
    designation:{
        type:String
    },
})