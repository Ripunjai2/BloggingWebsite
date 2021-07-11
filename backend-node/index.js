const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.use('/', (req, res) => {
  console.log('Hii from routes');
});

app.listen(5555, () => {
  console.log('Running on port 5555');
});
