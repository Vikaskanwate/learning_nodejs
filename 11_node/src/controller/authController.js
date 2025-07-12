const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

const register = async (req,res)=>{
    const {username,password,role} = req.body;
    
}

const login = ()=>{
    
}


module.exports = {
    register,
    login
}