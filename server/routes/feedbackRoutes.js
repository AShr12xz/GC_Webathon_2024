const express = require('express');

const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

router.post('/submitFeedback',feedbackController.submitFeedback);

module.exports = router