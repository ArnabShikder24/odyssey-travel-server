const db = require("../database/db");

exports.createPack = (req, res) => {
    const { name, details, price, img_url } = req.body;

    const parsedPrice = parseFloat(price);
    
    const sql = `INSERT INTO packages (name, details, price, img_url) VALUES ('${name}', '${details}', '${parsedPrice}', '${img_url}')`;

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


exports.getPackById = (req, res) => {
  const { package_id } = req.query;

  const sql = `SELECT * FROM packages WHERE package_id = ${package_id}`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error("Error fetching Package:", err);
          return res.status(500).json({ message: "Failed to fetch Package" });
      }

      if (result.length === 0) {
          return res.status(404).json({ message: "Package not found" });
      }

      res.status(200).json({ message: "Package fetched successfully", data: result[0] });
  });
};

exports.deletePackById = (req, res) => {
  const { package_id } = req.query;

  const sql = `DELETE FROM packages WHERE package_id = ${package_id}`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error("Error deleting package:", err);
          return res.status(500).json({ message: "Failed to delete Package" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Package not found" });
      }

      res.status(200).json({ message: "Package deleted successfully" });
  });
};

exports.updatePack = (req, res) => {

  const { package_id, name, details, price, img_url } = req.body;

  const parsedPrice = parseFloat(price);

  const sql = `UPDATE products 
                  SET name=?, details=?, price=?
                  WHERE package_id=?`;
  const values = [name, details, parsedPrice, img_url, package_id];

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error("Error updating product:", err);
          return res.status(500).json({ message: "Failed to update product" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Product not found" });
      }

      console.log("Product updated successfully");
      res.status(200).json({ message: "Product updated successfully" });
  });
};

