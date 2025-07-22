const usermodel = require('../models/user');
const jwt = require('jsonwebtoken')
async function register(req, res) {
    const { username, password, email, mobileNumber, role } = req.body;
    
    try {
        const user = await usermodel.findOne({ username });
        if (!user) {
            const newUser = new usermodel({
                username,
                password,
                email,
                mobileNumber,
                role
            });
            await newUser.save()
            res.status(201).json({
                message: "user registerd successfully",
                success: true
            })
        }
        else {
            res.status(400).json({
                error: "user already exists",
                success: false
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err
        })
    }
}


async function login(req, res) {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        const user = await usermodel.findOne({ username });
        if (!user || !(await user.comparepassword(password))) {
            res.status(400).send({ error: "invalid email or password" });
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
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

module.exports={
    register,
    login
}