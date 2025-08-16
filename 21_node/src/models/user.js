const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(tihs.password,8);
    }
    next();
})

userSchema.methods.comparepassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema);