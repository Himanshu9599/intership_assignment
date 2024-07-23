const express = require('express');
const router = express.Router();
const { sendReply } = require('../controllers/replyController');

router.post('/:thread_id', sendReply);

module.exports = router;
