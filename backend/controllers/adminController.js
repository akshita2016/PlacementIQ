const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");
const dsaPath = path.join(__dirname, "../data/dsa.json");
const subjectsPath = path.join(__dirname, "../data/subjects.json");

exports.getAllUsers = (req, res) => {

    const users = JSON.parse(fs.readFileSync(usersPath));

    res.json({
        message: "Users fetched successfully",
        users
    });

};

exports.getStats = (req, res) => {

    const users = JSON.parse(fs.readFileSync(usersPath));

    let dsaTopics = {};
    let subjects = {};

    try {
        dsaTopics = JSON.parse(fs.readFileSync(dsaPath));
    } catch {
        dsaTopics = {};
    }

    try {
        subjects = JSON.parse(fs.readFileSync(subjectsPath));
    } catch {
        subjects = {};
    }

    const totalProblems = Object.values(dsaTopics)
        .reduce((sum, arr) => sum + arr.length, 0);

    res.json({
        totalUsers: users.length,
        totalDSATopics: Object.keys(dsaTopics).length,
        totalProblems,
        totalSubjects: Object.keys(subjects).length
    });

};