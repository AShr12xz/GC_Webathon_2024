const express = require('express');
const courseController = require('../controllers/courseController');
const studentCourseController = require('../controllers/studentCourseController');

const router = express.Router();

router.post('/createStudentCourse', courseController.createStudentCourse);
router.post('/submitFeedback',studentCourseController.submitFeedback);
router.post('/showFeedback',studentCourseController.showFeedback);

module.exports = router;