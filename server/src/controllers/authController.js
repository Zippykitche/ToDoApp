import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const register = async (req, res, next) => {
try {
const { name, email, password } = req.body;
if (!name || !email || !password)
return res.status(400).json({ message: "name, email and password are required" });


const existing = await User.findOne({ email });
if (existing)
return res.status(400).json({ message: "Email already registered" });


const hashed = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashed });


const userSafe = {
id: user._id,
name: user.name,
email: user.email,
createdAt: user.createdAt
};


res.status(201).json({ message: "User created", user: userSafe });
} catch (err) {
next(err);
}
};


export const login = async (req, res, next) => {
try {
const { email, password } = req.body;
if (!email || !password)
return res.status(400).json({ message: "email and password are required" });


const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: "Invalid credentials" });


const ok = await bcrypt.compare(password, user.password);
if (!ok) return res.status(400).json({ message: "Invalid credentials" });


const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
expiresIn: "24h"
});


res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
} catch (err) {
next(err);
}
};