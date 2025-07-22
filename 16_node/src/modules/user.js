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
        enum:["admin","employee"],
        default:"employee"
    }
})


userSchema.pre("save",async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

userSchema.methods.comparepassword =   async function(password){
    return await bcrypt.compare(password,this.password);
}


module.exports = mongoose.model("User",userSchema);