const express = require("express");
const connectDB = require("./config/connection");
const vehicalRouter = require('./routes/vehicalRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());
connectDB();

app.use("",vehicalRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Application is started");
    
});