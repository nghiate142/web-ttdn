const express = require('express');
const router = express.Router();
const video = require('../controller/video.controller');

router.post('/', video.uploadVideo);

module.exports = router;