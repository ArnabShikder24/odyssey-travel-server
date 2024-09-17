const db = require("../database/db");

exports.createFlight = (req, res) => {
  const { flight_number, seat_class, departure_time, arrival_time, price } = req.body;

  const parsedPrice = parseFloat(price);

  const sql = `INSERT INTO flights (flight_number, seat_class, departure_time, arrival_time, price) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [flight_number, seat_class, departure_time, arrival_time, parsedPrice], (err, result) => {
    if (err) {
      console.error("Error creating Flight:", err);
      return res.status(500).json({ message: "Failed to create Flight" });
    }

    console.log("Flight created successfully");
    res.status(201).json({ message: "Flight created successfully" });
  });
};

exports.getAllFlights = (req, res) => {
  const sql = "SELECT * FROM flights";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching Flights:", err);
      return res.status(500).json({ message: "Failed to fetch Flights" });
    }

    console.log("Flights fetched successfully");
    res.status(200).json(results);
  });
};

exports.getFlightById = (req, res) => {
  const { flight_id } = req.query;

  const sql = `SELECT * FROM flights WHERE flight_id = ?`;

  db.query(sql, [flight_id], (err, result) => {
    if (err) {
      console.error("Error fetching Flight:", err);
      return res.status(500).json({ message: "Failed to fetch Flight" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Flight not found" });
    }

    res.status(200).json({ message: "Flight fetched successfully", data: result[0] });
  });
};

exports.deleteFlightById = (req, res) => {
  const { flight_id } = req.query;

  const sql = `DELETE FROM flights WHERE flight_id = ?`;

  db.query(sql, [flight_id], (err, result) => {
    if (err) {
      console.error("Error deleting Flight:", err);
      return res.status(500).json({ message: "Failed to delete Flight" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Flight not found" });
    }

    res.status(200).json({ message: "Flight deleted successfully" });
  });
};
