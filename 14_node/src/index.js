const express = require('express');
const connectDB = require('./config/connection');
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());

connectDB();
app.use("/api",productRouter);
app.use("/api/users",userRouter);
app.use("/api/category",categoryRouter);

app.listen(3000,()=>{
    console.log("application is started");
});