const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const studentSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    course:{
        type:String
    }
})


module.exports = mongoose.model("Student",studentSchema);