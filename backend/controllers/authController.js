const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");


const getUsers = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch {
        return [];
    }
};


const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};


exports.signup = (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const users = getUsers();

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    const newUser = {
        id: "USER" + Date.now(),
        name,
        email,
        password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);

    saveUsers(users);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser
    });
};



exports.login = (req, res) => {

    const { email, password } = req.body;

    const users = getUsers();

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({
            message: "Invalid email"
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    res.json({
        message: "Login successful",
        user
    });
};