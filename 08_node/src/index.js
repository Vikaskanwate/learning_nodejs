const express = require('express');
const bearerToken = require('express-bearer-token');
const app = express();

app.use(bearerToken());
app.use(function (req, res) {
  res.send('Token '+req.token);
  console.log(req.token);
  
});
app.listen(3000);