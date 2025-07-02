const express = require("express");
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;

// connection
mongoose
        .connect('mongodb://localhost:27017/crud')
        .then(()=>console.log("Mongo connected"))
        .catch((err)=>console.log("mongo error",err));

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String
    },
    gender:{
        type:String
    }
});

const User = mongoose.model("user",userSchema);
// this is middleware which is use to valiate and process the request before sending to the client or receiving from client 
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
    console.log("hello from middleware")
    next();
})


// REST API getAll Users
app.get('/api/users', async(req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
});


// get User by id
app
    .route("/api/users/:id")
    .get(async(req, res) => {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error:"user not found"});
        return res.json(user);
    })
    .patch( async (req, res) => {
        await User.findByIdAndUpdate(req.params.id,{lastName:"changed"});
        return res.json({ status: "success" });
    })
    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.json({status:"success"});
    });


app.post('/api/users', async (req, res) => {
    const body = req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title 
    ){
        return res.status(400).json({msg:"all fields are req.."});
    }

    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    })

    console.log("result",result);
    return res.status(201).json({msg:"success"});
    
})

app.listen(PORT, () => console.log("application is started"));