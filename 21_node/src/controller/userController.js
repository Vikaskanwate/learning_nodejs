const usermodel = require('../models/user');
const jwt = require('jsonwebtoken');
const register = async (req,res) =>{
    const {username,password,email,role} = req.body;
    try {
        const user = await usermodel.findOne({username});
        if(!user){
            const newUser = new usermodel({
                username,password,email,role
            })

            await newUser.save();
            return res.status(200).json({
                user:newUser,

            })
        }

        return res.status(400).json({
            msg:"User already exists"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


const login = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const user = await usermodel.findOne({username});
        if(!user.password || !(await user.comparepassword(password))){
            return res.status(404).json({
                msg:"Check username or password"
            })
        }
        const token = jwt.verify(
            {_id:user._id,
                role:user.role
            },
            "key",
            {expiresIn:"1h"}
        )

        return res.status(200).json({
            user:user,
            access:token,
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

module.exports = {register,login}