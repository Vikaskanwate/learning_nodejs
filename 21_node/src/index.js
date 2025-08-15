const express = require("express");
const connectDB = require("./config/connection");
const vehicalRouter = require('./routes/vehicalRoutes');
const app = express();

app.use(express.json());
connectDB();

app.use("",vehicalRouter);

app.listen(3000,()=>{
    console.log("Application is started");
    
});