const express = require('express');
const connectDB = require('../db/connection');
const app = express();

connectDB();

app.listen(3000,()=>{
    console.log("application is started...");
})