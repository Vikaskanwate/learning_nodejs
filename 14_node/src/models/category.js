const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    categoryname:{
        type:String,
        required:false
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Category",categorySchema);