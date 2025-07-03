const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
//connection
mongoose
    .connect("mongodb://localhost:27017/crud")
    .then(()=>console.log("mongo connected"))
    .catch((err)=>console.log("mongo err",err));


// from here model layes starts
// create schema

const studentSchema = new mongoose.Schema({
    firstName: {
        type:String
    },
    lastName:{
        type:String
    },
    course:{
        type:String
    }
});

// we can create model with the help of the moongose
const Student = mongoose.model("student",studentSchema);
// ends here

// app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/api/student',async (req,res)=>{
    const allUsers = await Student.find({});
    return res.json(allUsers);
});

app
    .route('/api/student/:id')
    .get(async(req,res)=>{
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({error:"employee"});
        return res.json(student);
    })
    .put(async (req,res)=>{
        const body = req.body;
        await Student.findByIdAndUpdate(req.params.id,body);
        console.log("body",body);
        return res.json({status:"success"});
    })
    .delete(async(req,res)=>{
        await Student.findByIdAndDelete(req.params.id);
        return res.json({status:"success"});
    })

app
    .post('/api/student',async(req,res)=>{
        const body = req.body;
        if(
            !body ||
            !body.firstName ||
            !body.lastName ||
            !body.course
        ){
            return res.status(404).json({msg:"all fields are req..."})
        }
        const result = await Student.create({
            firstName:body.firstName,
            lastName:body.lastName,
            course:body.course
        })
        console.log("result",result);
        return res.status(201).json({msg:"success"});
    })

app.listen(PORT,()=>console.log("application is started"));