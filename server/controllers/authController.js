import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Helper to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { user: { _id: user._id, username: user.username } },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// @route   POST /api/auth/register
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// @route   POST /api/auth/login
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// @route   GET /api/auth/user
// @desc    Get authenticated user's info
// @access  Private
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("username email");
    res.json(user);
  } catch (err) {
    console.error("Get User Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
