const express = require('express');

const authController = require('../controllers/authController');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/auth',authController.userVerification);
router.post('feedback',feedbackController.submitFeedback);

module.exports = router