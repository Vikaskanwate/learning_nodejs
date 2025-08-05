const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/crud7")
        console.log(`mongodb connected on port ${conn.connection.port}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;