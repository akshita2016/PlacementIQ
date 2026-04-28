import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

dotenv.config();
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//app.get("/test", (req, res) => {
 // res.send("test working");
//});

connectDB();

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

console.log("SERVER RESTARTED");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});