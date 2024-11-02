require('dotenv').config(); // Load environment variables from .env file
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);

// Connect to MongoDB
console.log("MongoDB URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(3000, () => {
            console.log('Server started at http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error("Connection error:", error);
    });
