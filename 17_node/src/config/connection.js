const mogoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn = await mogoose.connect(`mongodb://localhost:27017/crud6`);
        console.log(`mongodb connected ${conn.connection.port}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;