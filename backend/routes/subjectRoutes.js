const express = require("express");
const router = express.Router();

const {
  getAllSubjects,
  getSubjectQuestions,
  addQuestion
} = require("../controllers/subjectController");

router.get("/", getAllSubjects);
router.get("/:subject", getSubjectQuestions);
router.post("/add", addQuestion);

module.exports = router;