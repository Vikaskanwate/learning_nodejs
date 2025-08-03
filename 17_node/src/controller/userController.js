const usermodel = require('../modules/user');
const jwt = require('jsonwebtoken');
async function register(req,res){
    const {username,password,email,role} = req.body;
    try{
        const user = await usermodel.findOne({username});
        console.log(user);
        
        if(!user){
            
            const newUser  =  new usermodel({
                username,
                password,
                email,
                role
            });
            await newUser.save();
            res.status(201).json({
                user:newUser,
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
            msg: "Internal server error"
        })
    }
}

async function login(req,res){
    const {username,password,role} = req.body;
    try{
        const user =  await usermodel.findOne({username});
        if(!user || !(await user.comparepassword(password))){
            res.status(401).json({
                error:"Invalid username or password"
            });
        }
        const token = jwt.sign({_id:user._id,role:user.role},
            "key",
            {expiresIn:"1h"}
        )
        res.status(200).json({
            user:user,
            access:token,
            success:true
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}

module.exports = {register,login}