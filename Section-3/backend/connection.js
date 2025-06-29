const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL;

mongoose.connect(url)
    .then((result) => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB:', err.message);
    });

module.exports = mongoose;

// This file establishes a connection to the MongoDB database using Mongoose.
// It reads the database URL from environment variables and logs the connection status.