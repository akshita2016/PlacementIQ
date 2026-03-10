const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/subjects.json");


exports.getAllSubjects = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath));
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error reading subjects data" });
    }
};


exports.getSubjectQuestions = (req, res) => {
    try {
        const { subject } = req.params;
        const data = JSON.parse(fs.readFileSync(dataPath));

        const subjectKey = Object.keys(data).find(
            (k) => k.toLowerCase() === subject.toLowerCase()
        );

        if (subjectKey && data[subjectKey]) {
            res.json(data[subjectKey]);
        } else {
            res.status(404).json({ message: `Subject ${subject} not found` });
        }

    } catch (error) {
        res.status(500).json({ message: "Error reading subjects data" });
    }
};


exports.addQuestion = (req, res) => {
    try {

        const { subject, question, answer } = req.body;

        if (!subject || !question) {
            return res.status(400).json({
                message: "Subject and question are required"
            });
        }

        const data = JSON.parse(fs.readFileSync(dataPath));

        let subjectKey = Object.keys(data).find(
            (k) => k.toLowerCase() === subject.toLowerCase()
        );

        if (!subjectKey) {
            subjectKey = subject;
            data[subjectKey] = [];
        }

        data[subjectKey].push({
            question,
            answer: answer || "To be updated..."
        });

        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

        res.status(201).json({
            message: "Question added successfully",
            subject: subjectKey
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating subjects data"
        });
    }
};