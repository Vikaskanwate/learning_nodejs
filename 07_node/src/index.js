const express = require('express');
const customerRouter = require('./router/customerRouter');
const connectDB = require('./db/connection');
const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.use('/customer',customerRouter);

app.listen(PORT,()=>{
    console.log("application started on port 3000");
});