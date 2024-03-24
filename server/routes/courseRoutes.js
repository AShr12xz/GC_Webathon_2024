const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/createCourse', courseController.createCourse);
// router.post('/updateCourse', courseController.updateCourse);
router.get('/getAllCourses', courseController.browseCourses);

router.post('/createStudentCourse', courseController.createStudentCourse);
router.post('/findStudentCourse', courseController.findStudentCourses);

module.exports = router;