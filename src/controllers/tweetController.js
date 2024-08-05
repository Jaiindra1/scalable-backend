// src/controllers/tweetController.js
const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
  try {
    const tweet = new Tweet({ userId: req.user.userId, text: req.body.text });
    await tweet.save();
    res.status(201).send({ message: 'Tweet posted successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
// src/controllers/tweetController.js
exports.getTimeline = async (req, res) => {
    try {
      const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
      res.send(tweets);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
