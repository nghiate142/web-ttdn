const express = require('express');
const router = express.Router();
const audioController = require('../controller/audio.controller'); // Đảm bảo rằng bạn đã tạo controller cho audio
const multer = require('multer');
const path = require('path');
const { checkToken } = require("../controller/auth.controller");

const isAudio = (file) => {
    const allowedExtensions = ['.mp3', '.wav', '.ogg'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024  },
    fileFilter: (req, file, cb) => {
        if (isAudio(file)) {
            cb(null, true);
        } else {
            cb(new Error('Only audio files are allowed'));
        }
    },
});

router.post('/', upload.single('file'), audioController.uploadAudio);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ status: 400, error: 'quá dung lượng' });
    } else {
        res.status(500).json({ status: 500, message: 'sai đuôi file' });
    }
});

module.exports = router;
