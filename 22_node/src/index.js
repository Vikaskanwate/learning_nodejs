const express = require('express');
const connectDb = require('../src/config/db');
const app = express();

connectDb();

app.listen(3000,()=>{
    console.log("Application is started on port 3000");
    
});