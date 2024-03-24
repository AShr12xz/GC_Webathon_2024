const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/createStudentCourse', courseController.createStudentCourse);
router.post('/findStudentCourse', courseController.findStudentCourses);

module.exports = router;