const usermodel = require('../modules/user');

async function  register(req,res) {
    const {username,password,email} = req.body;
    try{
        const user = await usermodel.findOne({username});
        if(!user){
            const newUser = new usermodel({
                username,
                password,
                email
            });
            await newUser.save();
            res.status(201).json({
                message:"user registerd succesfully",
                success:true
            })
        }else{
            res.status(400).json({
                error:"user alraedy exists",
                success:false
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err
        })
    }
}


async function login(req,res){
    console.log(req.body);
    try{
        const {username,password,email}  = req.body;
        const user = await usermodel.findOne({username});
        if(!user || !(await user.comparepassword(password))){
            res.status(400).json({
                error:"Invalid username or password"
            })
        }
        const token = jwt.sign({_id:user._id,role:user.role},"key",{expiresIn:"1h"})
        res.status(200).json({
            user:user,
            access:token,
            success:true
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:err,
            success:false
        })
    }
}

module.exports = {
    register,
    login
}