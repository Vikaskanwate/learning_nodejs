const express = require('express');
const connectDB = require('./config/connection');
const studentRoutes = require('./routes/studentRoutes')
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use(express.json());

connectDB();

app.use("",studentRoutes);
app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log("application is started on port 3000");
});