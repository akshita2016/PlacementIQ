const express = require("express");
const router = express.Router();

const {
  getAllTopics,
  getTopicProblems,
  addProblem
} = require("../controllers/dsaController");

router.get("/", getAllTopics);
router.get("/:topic", getTopicProblems);
router.post("/add", addProblem);

module.exports = router;