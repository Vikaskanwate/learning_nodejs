const mongoose = require('mongoose');

async function  connectDB(){
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/crud4");
        console.log(`mongodb is connected on port ${conn.connection.port}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;