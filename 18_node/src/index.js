const express = require('express');
const connectDB = require('./config/connection');
const studentRouter = require('./routes/studentRoutes');
const app = express();

app.use(express.json());
connectDB();

app.use("",studentRouter);
app.listen(3000,()=>{
    console.log("application is started...");
})