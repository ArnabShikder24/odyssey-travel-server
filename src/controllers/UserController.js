const db = require("../database/db");

exports.createUser = (req, res) => {
    const { username, email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `INSERT INTO users (username, email) VALUES ('${username}', '${email}')`;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating user:", err);
            return res.status(500).json({ message: "Failed to create user" });
        }

        console.log("User created successfully");
        res.status(201).json({ message: "User created successfully", user_id: result.insertId });
    });
};

exports.getAllUsers = (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ message: "Failed to fetch users" });
        }

        console.log("Users fetched successfully");
        res.status(200).json(results);
    });
};

exports.getUserByEmail = (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ message: "Email parameter is required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    const values = [email];

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error("Error fetching user by email:", err);
            return res.status(500).json({ message: "Failed to fetch user" });
        }

        console.log("User fetched successfully");
        res.status(200).json(results);
    });
};
