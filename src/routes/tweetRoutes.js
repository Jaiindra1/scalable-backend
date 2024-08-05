// src/routes/tweetRoutes.js
const express = require('express');
const tweetController = require('../controllers/tweetController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, tweetController.postTweet);
router.get('/:userId/timeline', tweetController.getTimeline);

module.exports = router;
