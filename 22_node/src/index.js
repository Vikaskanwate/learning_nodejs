const express = require('express');
const employeeController = require('./controller/employeeController');
const connectDb = require('../src/config/db');
const app = express();

connectDb();
app.use(express.json());

app.use("",employeeController);

app.listen(3000,()=>{
      console.log("Application is started on port 3000");
    
});