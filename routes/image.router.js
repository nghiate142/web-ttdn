const express = require('express');
const router = express.Router();
const image = require('../controller/image.controller');
const multer = require('multer');
const upload = multer({ dest: 'image/' });

router.post('/',upload.single('link'), image.uploadImage);
router.get('/:id')

module.exports = router;