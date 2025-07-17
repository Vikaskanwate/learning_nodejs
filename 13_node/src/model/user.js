const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['admin','student'],
        default:"student"
    }
})

userSchema.pre("save",async(next)=>{
    const user = this;
    if(user.isModified("password")){
      user.password = await bcrypt.hash(user.password,8); 
    }
    next();
})

userSchema.methods.comparePassword = async (password)=>{
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema);