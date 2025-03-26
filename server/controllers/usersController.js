const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        // Possibly check if req.user is admin here
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password,role } = req.body;

        const existingUsername = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });
        if (existingUsername || existingEmail) {
            return res.status(400).json({ error: 'User already in use' });
        }

        const newUser = new User({ username, email, password, role });
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: { username: newUser.username, role: newUser.role },
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { credential, password } = req.body;
        const user = await User.findOne({ 
            $or: [{ username: credential }, { email: credential }]
         });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            message: 'Logged in successfully',
            token,
            user: { username: user.username, role: user.role },
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

module.exports = { 
    getUsers, 
    registerUser, 
    loginUser 
};