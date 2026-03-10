const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dsaRoutes = require("./routes/dsaRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/dsa", dsaRoutes);
app.use("/subjects", subjectRoutes);
app.listen(5000, () => {
 console.log("Server running on port 5000");
});