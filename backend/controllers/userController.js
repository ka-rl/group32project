const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create token function - now returns the token
const createToken = (_id) => {
    return jwt.sign({ _id }, 'thisshouldbesecret', { expiresIn: '1h' });  // Ensure you return the token and add expiration for security
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // Create token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { email, password, location, preference, availability, skills } = req.body;

    try {
        const user = await User.register(email, password, location, preference, availability, skills);

        // Create token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message);
    }
};

module.exports = { loginUser, registerUser };
