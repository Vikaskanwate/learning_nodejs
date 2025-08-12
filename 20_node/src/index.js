const express = require('express');
const connectDB = require('./config/connection');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
app.use(express.json());

connectDB();

app.use("",productRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("application is started...");
});