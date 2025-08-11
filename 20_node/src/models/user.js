const mongoose = require('mongoose');

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
        enum:["user","manager"],
        default:"user"
    }
})

module.exports = mongoose.model("User1",userSchema);