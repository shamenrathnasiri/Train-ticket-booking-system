const db = require("../db");

exports.createBooking = (req, res) => {
  const { name, age, gender, contact, from, to, date, travelClass, tickets } = req.body;
  const user_id = req.user.id;

  const sql = "INSERT INTO bookings (user_id, name, age, gender, contact, from_station, to_station, travel_date, class, tickets) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [user_id, name, parseInt(age), gender, contact, from, to, date, travelClass, parseInt(tickets)], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Booking successful", bookingId: result.insertId });
  });
};
