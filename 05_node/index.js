const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connection
mongoose
    .connect("mongodb://localhost:27017/crud")
    .then(()=>console.log("mongo connected"))
    .catch((err)=>console.log("mongo err",err));


    // from here model layes starts
// create schema

const studentSchema = new mongoose.Schema({
    firstName: {
        type:Stirng
    },
    lastName:{
        type:String
    },
    course:{
        type:String
    }
})

// we can create model with the help of the moongose
const Student = mongoose.model("student",studentSchema);

// ends here
