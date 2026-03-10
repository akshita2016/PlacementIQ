const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/dsa.json");

exports.getAllTopics = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error reading DSA data" });
  }
};

exports.getTopicProblems = (req, res) => {
  try {
    const { topic } = req.params;
    const data = JSON.parse(fs.readFileSync(dataPath));

    const topicKey = Object.keys(data).find(
      (k) => k.toLowerCase() === topic.toLowerCase()
    );

    if (topicKey && data[topicKey]) {
      res.json(data[topicKey]);
    } else {
      res.status(404).json({ message: `Topic ${topic} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error reading DSA data" });
  }
};

exports.addProblem = (req, res) => {
  try {
    const { topic, title, difficulty, link } = req.body;

    if (!topic || !title) {
      return res.status(400).json({ message: "Topic and title are required" });
    }

    const data = JSON.parse(fs.readFileSync(dataPath));

    let topicKey = Object.keys(data).find(
      (k) => k.toLowerCase() === topic.toLowerCase()
    );

    if (!topicKey) {
      topicKey = topic;
      data[topicKey] = [];
    }

    data[topicKey].push({
      title,
      difficulty: difficulty || "Medium",
      link: link || "#",
    });

    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    res.status(201).json({
      message: "Problem added successfully",
      topic: topicKey,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating DSA data" });
  }
};