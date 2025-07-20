const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    mobileNumber:{
        type:String,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
    
})

userSchema.pre("save",async function (){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8);
    }
    next();
});

userSchema.methods.comparepassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema);