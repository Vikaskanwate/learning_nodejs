const mongoose = require('mongoose');

const vehicalSchema = new mongoose.Schema({
    vehicalName:{
        type:String
    },
    type:{
        type:String
    },
    brandName:{
        type:String
    },
    price:{
        type:Number
    }
})


module.exports = mongoose.model("Vehicals",vehicalSchema);