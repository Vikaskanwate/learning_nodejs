const usermodel = require('../model/user');
const jwt = require('jsonwebtoken');

async function register(req,res){
    console.log(req.body);
    const {username,password,role} = req.body;
    try{
        const user = await usermodel.findOne({username});
        console.log(user);
        if(!user){
            const newUser = new usermodel({
                username, 
                password,
                role
            });
            await newUser.save();
            res.status(201).json({
                message:"User register successfully",
                success:true
            })
        }else{
            res.status(400).json({
                error:"User alreay exists",
                success:false
            })
        }
    }catch(err){
        console.log(err,"from user controller");
        res.status(500).json({
            error:err.message,
            success:false
        })
    }
}

async function login(req,res){
    console.log(req.body);
    try{
        const {username,password} = req.body;
        const user = await usermodel.findOne({username});
        if(!user || !(await user.comparepassword(password))){
            return res.status(400).send({
                error:"Invalid username or password"
            });
        }
        const token = jwt.sign({_id:user._id, role:user.role},
            "key",{expiresIn:"1h"}
        )
        res.status(200).send({user:user,access:token,success:true});
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:err.message,
            success:false
        });
    }
}

module.exports ={
    register,
    login
}