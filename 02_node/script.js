const express = require('express');
// here i have app the functionalities of express js in app 
const app = express()


app.use(function(req,res,next){
  console.log('middleware chala');
  next();
});

app.get("/",(req,res)=>{
  res.send("hello");
})

app.get("/profile",(req,res)=>{
  res.send("world");
})

app.listen(3000)
