const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
   res.send('Hello, MERN!');
});

mongoose.connect('mongodb://127.0.0.1:27017/wedding_planner')

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});
