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
