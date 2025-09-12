const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");
const verifyToken = require("../middleware/auth");

router.post("/", verifyToken, bookingsController.createBooking);

module.exports = router;

