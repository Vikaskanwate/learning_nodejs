const usermodel = require('../models/user');
const register  = async (req,res) =>{
    try{
        const {username,password,email,role} = req.body;
        const user = usermodel.findOne({email});
        if(!user){
            const newUser = new usermodel({
                username,password,email,role
            })
            await newUser.save();
            return res.status(200).json({
                user:newUser,
                msg:"user registered successfully"
            })
        }
        return res.status(400).json({
            msg:"User already exists"
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const login = async () =>{
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
