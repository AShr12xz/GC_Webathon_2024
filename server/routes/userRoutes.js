const express = require('express');

const studentController = require('../controllers/studentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/data',authController.fetchData);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/auth',authController.userVerification);
router.post('/seeProfile', studentController.getStudentProfile);

module.exports = router