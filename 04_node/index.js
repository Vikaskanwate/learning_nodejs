const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;

// connection
mongoose
        .connect('mongodb://localhost:27017/crud')
        .then(()=>console.log("mongo connected"))
        .catch((err)=>console.log("mongo error",err));

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    job_title:{
        type:String
    }
})

// model represent database schema

const Employee = mongoose.model("employee",userSchema);

app.use(express.urlencoded({extended:true}));


app.get('/api/emp',async (req,res)=>{
    const allDbUsers = await Employee.find({});
    return res.json(allDbUsers);
});

app
    .route('/api/emp/:id')
    .get(async(req,res)=>{
        const emp = await Employee.findById(req.params.id);
        if(!emp) return res.status(404).json({error:"employee not found"});
        return res.json(emp);
    })
    .patch(async(req,res)=>{
        await Employee.findByIdAndUpdate(req.params.id,{lastName:"changed"});
        return res.json({status:"success"});
    })
    .delete(async(req,res)=>{
        await Employee.findByIdAndDelete(req.params.id)
        return res.json({status:"success"});
    })

app 
    .post("/api/emp",async(req,res)=>{
        const body = req.body;
        if(
            !body ||
            !body.firstName ||
            !body.lastName ||
            !body.email ||
            !body.job_title
        ){
            return res.status(404).json({msg:"all fields are req..."})
        }
        const result = await Employee.create({
            firstName:body.firstName,
            lastName:body.lastName,
            email:body.email,
            job_title:body.job_title,
        })
        console.log("result" ,result);
        return res.status(201).json({msg:"success"});
    })
app.listen(PORT,()=>console.log("application is started"));

