const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

const register = async (req,res)=>{
    try{
        
        const {username,password,role} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(req.body);
    
        const newUser = new User({username,password: hashedPassword,role});
        await newUser.save();
        res.status(201).json({
            message:`user registerd with username ${username}`
        });
    }catch(err){
        console.log(err);
        
        res.status(500).json({
            message:`something went worng`
        });
    }
};

const login = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        console.log(user)
        if(!user){
            res.status.json({
                message:`user with username ${username} not found`
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        const token =  jwt.sign(
            {id: user._id,role:user.role},
            process.env.SECRET_KEY,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:token
        })
    }catch(err){
        res.status(500).json({
            message:`something went worng`
        });
    }
}


module.exports = {
    register,
    login
}