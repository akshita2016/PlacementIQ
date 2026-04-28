import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      profilePic: req.file?.path
    });

    await user.save();
     console.log("SIGNUP HIT");
console.log(req.body);
console.log(req.file);
    res.json("Signup successful");
  } catch (err) {
    res.status(500).json(err.message);
  }
};


export const googleLogin = async (req, res) => {
  try {
    console.log("GOOGLE LOGIN HIT");
    console.log("BODY:", req.body);

    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "No token received" });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    console.log("PAYLOAD:", payload);

    const { email, name, picture } = payload;

    res.status(200).json({
      message: "Google login success",
      user: { email, name, picture }
    });

  } catch (err) {
    console.log("ERROR:", err.message);
    res.status(401).json({ message: "Google login failed" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json("Wrong password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};