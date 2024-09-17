const db = require("../database/db");

exports.createTourGuide = (req, res) => {
  const { name, location, rating } = req.body;

  const parsedRating = parseFloat(rating);

  const sql = `INSERT INTO tour_guides (name, location, rating) VALUES (?, ?, ?)`;

  db.query(sql, [name, location, parsedRating], (err, result) => {
      if (err) {
          console.error("Error creating Tour Guide:", err);
          return res.status(500).json({ message: "Failed to create Tour Guide" });
      }

      console.log("Tour Guide created successfully");
      res.status(201).json({ message: "Tour Guide created successfully" });
  });
};


exports.getAllTourGuides = (req, res) => {
  const sql = "SELECT * FROM tour_guides";

  db.query(sql, (err, results) => {
      if (err) {
          console.error("Error fetching tour guides:", err);
          return res.status(500).json({ message: "Failed to fetch tour guides" });
      }

      console.log("Tour Guides fetched successfully");
      res.status(200).json(results);
  });
};


exports.getTourGuideById = (req, res) => {
  const { guide_id } = req.query;

  const sql = `SELECT * FROM tour_guides WHERE guide_id = ?`;

  db.query(sql, [guide_id], (err, result) => {
      if (err) {
          console.error("Error fetching Tour Guide:", err);
          return res.status(500).json({ message: "Failed to fetch Tour Guide" });
      }

      if (result.length === 0) {
          return res.status(404).json({ message: "Tour Guide not found" });
      }

      res.status(200).json({ message: "Tour Guide fetched successfully", data: result[0] });
  });
};


exports.deleteTourGuideById = (req, res) => {
  const { guide_id } = req.query;  

  const sql = `DELETE FROM tour_guides WHERE guide_id = ?`;

  db.query(sql, [guide_id], (err, result) => {
      if (err) {
          console.error("Error deleting Tour Guide:", err);
          return res.status(500).json({ message: "Failed to delete Tour Guide" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Tour Guide not found" });
      }

      res.status(200).json({ message: "Tour Guide deleted successfully" });
  });
};
