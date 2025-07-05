const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    totalAmount:{
        type:String
    }
})

const customer = mongoose.model("Customer",customerSchema);

module.exports = customer;