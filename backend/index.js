
const express = require('express');
const db = require('./db');
const cors = require('cors'); 

const app = express();
const PORT = 3000;
const userRoute= require('./auth/route');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/auth', userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});