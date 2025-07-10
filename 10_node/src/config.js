const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost:27017/login');

connect.then(()=>{
    console.log("database is connected");
})
.catch(()=>{
    console.log("database is not connected");
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const user = new mongoose.model('users',loginSchema);

module.exports = user;