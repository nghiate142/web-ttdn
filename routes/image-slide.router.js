const express = require('express');
const router = express.Router();
const image = require('../controller/image-slide.controller');
const multer = require('multer');
const path = require('path');
const { checkToken } = require('../controller/auth.controller');

const isImage = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + fileExtension);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (isImage(file)) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed'));
        }
    },
});

router.post('/', upload.single('file'), image.uploadImageSlide);
// router.post('/', upload.single('file'), image.uploadImageNew);
router.get('/:id', image.getUrlImageSlide);
router.get('/', image.getAllImageSlide);
router.delete('/:id', image.delete);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ status: 400, error: 'quá dung lượng' });
    } else if (err) {
        res.status(500).json({ status: 500, message: err.message });
    } else {
        next();
    }
});

module.exports = router;
