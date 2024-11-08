// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse JSON request bodies

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use Routes
app.use('/api/users', userRoutes);

// Define server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
