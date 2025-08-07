const express = require('express');
const connectDB = require('./config/connection');
const employeeRouter = require('./routes/employeeRoutes');
const userRouter = require('./routes/userRoutes')
const app = express();

connectDB();

app.use(express.json());

app.use("",employeeRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("application is started...");
})