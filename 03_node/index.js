const express = require('express');
const userRouter = require('./routes/userRouter');
const {connectMongoDb} = require('./connection');
// const {logReqRes} = require('./'); 
const app = express();
const PORT = 3000;

connectMongoDb('mongodb://localhost:27017/crud');



// this is middleware which is use to valiate and process the request before sending to the client or receiving from client 
app.use(express.urlencoded({ extended: false }));

// app.use(logReqRes('log.txt'));

app.use('/user',userRouter)

app.listen(PORT, () => console.log("application is started"));