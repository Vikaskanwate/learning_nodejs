const express = require('express');
const connectDB = require("./config/connection");
const userRoute = require('./routes/userRoutes');
const sample = require('./routes/sample')
const app = express();

app.use(express.json());
connectDB();

app.use("",userRoute);
app.use("",sample);

app.listen(3000,()=>
    console.log("application is started on 3000")
);