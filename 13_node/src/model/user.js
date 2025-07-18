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

userSchema.pre('save',async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,8);
    }
    next();
});

userSchema.methods.comparepassword = async function (password){
    return bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema);