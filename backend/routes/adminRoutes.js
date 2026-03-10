const express = require("express");
const router = express.Router();

const { getAllUsers, getStats } = require("../controllers/adminController");

router.get("/users", getAllUsers);
router.get("/stats", getStats);

module.exports = router;
