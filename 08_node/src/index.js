const express = require('express');
const bearerToken = require('express-bearer-token');
const connectDB = require('../src/db/connection');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();

app.use(express.json());

connectDB();

app.use("",employeeRoutes);

app.listen(3000,()=>{
  console.log("app is started on port 3000")
});