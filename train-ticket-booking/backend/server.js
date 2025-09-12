// backend/server.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // ✅ make sure this file exists and exports a router

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // ✅ this must be a valid router

app.use("/api/bookings", require("./routes/bookings"));

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
