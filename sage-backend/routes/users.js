const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, securityQuestion, securityAnswer } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const user = new User({ name, email, password, securityQuestion, securityAnswer });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
