const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // allow cross-origin requests from React frontend
app.use(express.json()); // parse JSON body

// Connect to MongoDB
const mongoURI = 'mongodb+srv://sageuser:sage1234@cluster0.3fsoxcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  securityQuestion: String,
  securityAnswer: String,
});

const User = mongoose.model('User', userSchema);

// API routes

// Register user
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, securityQuestion, securityAnswer } = req.body;
    const user = new User({ name, email, password, securityQuestion, securityAnswer });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
