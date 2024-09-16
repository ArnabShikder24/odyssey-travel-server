const db = require("../database/db");

exports.createPack = (req, res) => {
    const { name, details, price } = req.body;

    if (!email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `INSERT INTO packages (name, details, price) VALUES ('${name}', '${details}', '${price}')`;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating Package:", err);
            return res.status(500).json({ message: "Failed to create Package" });
        }

        console.log("Package created successfully");
        res.status(201).json({ message: "Package created successfully"});
    });
};

exports.getAllPack = (req, res) => {
  const sql = "SELECT * FROM packages";

  db.query(sql, (err, results) => {
      if (err) {
          console.error("Error fetching packages:", err);
          return res.status(500).json({ message: "Failed to fetch packages" });
      }

      console.log("packages fetched successfully");
      res.status(200).json(results);
  });
};