const express = require('express')
const productRouter = require('./routes/productRouter');
const connectDB = require('./db/connection');
const app = express()
const port = 3000

connectDB();

app.use(express.json());

app.use('/api',productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
