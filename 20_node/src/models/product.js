const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    instock:{
        type:true
    }
})

module.exports = mongoose.model("Product",productSchema);