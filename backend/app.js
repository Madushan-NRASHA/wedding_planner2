const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hello, MERN!');
});

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
