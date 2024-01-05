const express = require('express');
const router = express.Router();
const image = require('../controller/image.controller');
const multer = require('multer');
const path = require('path');
const { checkToken } = require("../controller/auth.controller");

const isImage = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

const upload = multer({
    dest: 'image/',
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (isImage(file)) {
            cb(null, true);
        } else {
            cb(('Only images are allowed'));
        }
    },
});
router.post('/', checkToken, upload.single('link'), image.uploadImage);
router.get('/:id', checkToken, image.getUrlImage)
router.get('/', checkToken, image.getAll)

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ status: 400, error: 'quá dung lượng' });
    } else {
        res.status(500).json({ status: 500, message: 'sai đuôi file' });
    }
});

module.exports = router;