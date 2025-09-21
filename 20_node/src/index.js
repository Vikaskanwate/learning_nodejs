const express = require('express');
const connectDB = require('./config/connection');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api",productRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("application is started...");
});