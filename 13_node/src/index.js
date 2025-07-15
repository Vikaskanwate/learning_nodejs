const express = require('express');
const connectDB = require('./config/connection');
const studentRoutes = require('./routes/studentRoutes')
const app = express();

app.use(express.json());

connectDB();

app.use("",studentRoutes);

app.listen(3000,()=>{
    console.log("application is started on port 3000");
});