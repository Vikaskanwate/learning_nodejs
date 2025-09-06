const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017");
    }catch(err){
        
    }
}