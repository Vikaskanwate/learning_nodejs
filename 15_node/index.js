const express = require('express');
const path  = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));

app.get('/', (req, res) => {
  res.render('home', { name: 'World' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
