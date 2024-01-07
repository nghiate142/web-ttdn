const express = require('express');
const router = express.Router();
const video = require('../controller/video.controller');
const multer = require('multer');
const path = require('path');
const { checkToken } = require("../controller/auth.controller");

const isVideo = (file) => {
    const allowedExtensions = ['.mp4', '.avi', '.mkv', '.mov'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

const upload = multer({
    dest: 'video/',
    limits: { fileSize: 5 * 1024 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (isVideo(file)) {
            cb(null, true);
        } else {
            cb(new Error('Only videos are allowed'));
        }
    },
});


router.post('/', checkToken, upload.single('link'), video.uploadVideo);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ status: 400, error: 'quá dung lượng' });
    } else {
        res.status(500).json({ status: 500, message: 'sai đuôi file' });
    }
});


module.exports = router;