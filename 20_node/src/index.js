const express = require('express');
const connectDB = require('./config/connection');
const productRouter = require('./routes/productRoutes');
const app = express();
app.use(express.json());

connectDB();

app.use("",productRouter);

app.listen(3000,()=>{
    console.log("application is started...");
});