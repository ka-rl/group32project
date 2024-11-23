const History = require('../models/historyModel');
const jwt = require('jsonwebtoken');

// Helper function to create token
const createToken = (_id) => {
    return jwt.sign({ _id }, 'thisshouldbesecret', { expiresIn: '1h' }); // **Returning the token**
};

const searchVolunteerHistory = async (req, res) => {
    const { email } = req.body;

    try {
        // **Check if email is provided before querying the database**
        if (!email) {
            return res.status(400).json({ error: 'Email must be provided' });
        }

        const eventHistory = await History.searchVolunteerHistory(email);

        // **Create a token (optional, not used directly in frontend)**
        const token = createToken(email); // Using email as payload for the token

        res.status(200).json({ eventsAttended: eventHistory, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { searchVolunteerHistory };
