const express = require('express');
const app = express()


app.use(function(req,res,next){
  console.log('middleware chala');
  next();
});

app.get("/",(req,res)=>{
  res.send("hello");
})

app.listen(3000)
