const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: false
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    available: {
        type: Boolean,
        required: false,
    },
    quantity: {
        type: Number,
        required: false,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product",productSchema);