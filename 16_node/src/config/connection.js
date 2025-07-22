const mongoose = require('mongoose');

exports.connectDB = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/crud5');
        console.log(`mongodb connected successfully ${conn.connection.port}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

