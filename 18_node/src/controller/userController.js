const usermodel = require('../models/user')
const jwt = require('jsonwebtoken')
async function register(req,res){
    const {username,password,email,role} = req.body;
    try{
        const user = await usermodel.findOne({email});
        if(!user){
            const newUser = new usermodel({
                username,
                password,
                email,
                role
            });

            await newUser.save();
            return res.status(200).json({
                msg:"User created successfully."
            })
        }
        return res.status(400).json({
            msg:"user already exists."
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Internal server error"
        })
    } 
} 

async function login(req,res){
    const {username,password} = req.body;
    try{
        const user = await usermodel.findOne({username});
        if(!user || !(await user.comparepassword(password))){
            res.status(401).json({
                error:"Invalid username or password"
            })
        }
        const token = jwt.sign({_id:user._id,role:user.role},"key",{expiresIn:"1h"});
        return res.status(200).json({
            user:user,
            access:token,
            success:true
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}

module.exports = {
    register,
    login
}