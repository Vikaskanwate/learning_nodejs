const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes')
const { connectDB } = require('./config/connection');

const app = express();

connectDB();
app.use(express.json());
app.use("",employeeRoutes);
app.listen(3000,()=>{
    console.log("application is started...");
});
