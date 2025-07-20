const express = require('express');
const connectDB = require('./config/connection');

const app = express();


connectDB();

app.listen(3000,()=>{
    console.log("application is started");
});