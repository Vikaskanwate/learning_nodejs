const express  = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const user = require('./config');
const { Collection } = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("views",path.join(__dirname,'views'));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",async (req,res)=>{
    const data = {
        name:req.body.username,
        password:req.body.password,
    }
    const userData = await Collection.insertMany(data);

    console.log(userData);
    
});


app.listen(3000,() => {
    console.log("application is started on port 3000");
});