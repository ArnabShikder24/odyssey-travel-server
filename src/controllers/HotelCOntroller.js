const db = require("../database/db");

exports.createHotel = (req, res) => {
  const { hotel_name, location, price_per_night, rating } = req.body;

  const parsedPrice = parseFloat(price_per_night);
  const parsedRating = parseFloat(rating);

  const sql = `INSERT INTO hotels (hotel_name, location, price_per_night, rating) VALUES (?, ?, ?, ?)`;

  db.query(sql, [hotel_name, location, parsedPrice, parsedRating], (err, result) => {
      if (err) {
          console.error("Error creating Hotel:", err);
          return res.status(500).json({ message: "Failed to create Hotel" });
      }

      console.log("Hotel created successfully");
      res.status(201).json({ message: "Hotel created successfully" });
  });
};

exports.getAllHotels = (req, res) => {
  const sql = "SELECT * FROM hotels";

  db.query(sql, (err, results) => {
      if (err) {
          console.error("Error fetching hotels:", err);
          return res.status(500).json({ message: "Failed to fetch hotels" });
      }

      console.log("Hotels fetched successfully");
      res.status(200).json(results);
  });
};


exports.getHotelById = (req, res) => {
  const { hotel_id } = req.query;

  const sql = `SELECT * FROM hotels WHERE hotel_id = ${hotel_id}`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error("Error fetching Hotel:", err);
          return res.status(500).json({ message: "Failed to fetch Hotel" });
      }

      if (result.length === 0) {
          return res.status(404).json({ message: "Hotel not found" });
      }

      res.status(200).json({ message: "Hotel fetched successfully", data: result[0] });
  });
};


exports.deleteHotelById = (req, res) => {
  const { hotel_id } = req.query;  

  const sql = `DELETE FROM hotels WHERE hotel_id = ${hotel_id}`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error("Error deleting Hotel:", err);
          return res.status(500).json({ message: "Failed to delete Hotel" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Hotel not found" });
      }

      res.status(200).json({ message: "Hotel deleted successfully" });
  });
};

