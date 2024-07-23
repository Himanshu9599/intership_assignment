const express = require('express');
const router = express.Router();
const { listOnebox, getThread, deleteThread } = require('../controllers/oneboxController');

router.get('/list', listOnebox);
router.get('/:thread_id', getThread);
router.delete('/:thread_id', deleteThread);

module.exports = router;
