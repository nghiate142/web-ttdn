const express = require('express');
const router = express.Router();
const video = require('../controller/video.controller');
const multer = require('multer');
const upload = multer({ dest: 'video/' });

router.post('/',upload.single('link'), video.uploadVideo);

module.exports = router;