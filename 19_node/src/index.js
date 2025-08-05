const express = require('express');
const connectDB = require('./config/connection');
const employeeRouter = require('./routes/employeeRoutes');
const app = express();

connectDB();

app.use(express.json());

app.use("",employeeRouter);

app.listen(3000,()=>{
    console.log("application is started...");
})