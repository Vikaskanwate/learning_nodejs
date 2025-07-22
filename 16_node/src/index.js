const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes')
const userRoutes = require("./routes/userRoutes");
const { connectDB } = require('./config/connection');

const app = express();

connectDB();
app.use(express.json());
app.use("",employeeRoutes);
app.use("",userRoutes);
app.listen(3000,()=>{
    console.log("application is started...");
});
