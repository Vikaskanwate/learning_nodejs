const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const authRouter = require('./routes/authRoute');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

connectDB();

app.use("",authRouter);
app.use("/users",userRoutes);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running  on port ${PORT}`);
});
