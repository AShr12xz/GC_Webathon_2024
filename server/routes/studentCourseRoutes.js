const express = require('express');
const courseController = require('../controllers/courseController');
const studentCourseController = require('../controllers/studentCourseController');

const router = express.Router();

router.post('/createStudentCourse', courseController.createStudentCourse);
router.post('/submitFeedback',studentCourseController.submitFeedback);
router.post('/showFeedback',studentCourseController.showFeedback);
router.post("/showCourses", studentCourseController.showCourses);
router.post('/showAttendanceforStudent',studentCourseController.showAttendanceforStudent);
router.post('/showAttendanceforFaculty',studentCourseController.showAttendanceforFaculty);
router.post('/updateAttendance', studentCourseController.updateAttendance)
router.post("/selectCourses", studentCourseController.selectCourses);
router.post("/addgrade",studentCourseController.addGrade);

module.exports = router;