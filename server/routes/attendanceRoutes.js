const express = require("express");

const attendanceController = require("../controllers/attendanceController");

const router = express.Router();

router.post("/updateAttendance", attendanceController.updateStudentAttendance);

module.exports = router;
