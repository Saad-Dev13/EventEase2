import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const newUser = await User.create({ email, password, role });
    const token = signToken(newUser._id);
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password!" });
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({ message: "Incorrect email or password!" });
  }

  const token = signToken(user._id);
  res.status(200).json({ token, user });
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};