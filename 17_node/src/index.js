const express = require('express');
const connectDB = require('../src/db/connection');
const empRouter = require('./routes/employeeRoutes');
const app = express();

connectDB();

app.use(express.json());

app.use("",empRouter);
app.listen(3000,()=>{
    console.log("application is started...");
})