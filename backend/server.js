require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const historyRoutes = require('./routes/history');

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/history', historyRoutes);

// Move the server start logic out of the connection block for easier testing
const startServer = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(3000, () => {
                console.log('server started at http://localhost:3000');
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

if (process.env.NODE_ENV !== 'test') {
    startServer(); // Only start the server when not in test environment
}

module.exports = { app, startServer };
