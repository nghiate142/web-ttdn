const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const linkController = require("../controller/links.controller")


const isImage = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
};
const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        console.log(file)
        if (isImage(file)) {
            cb(null, true);
        } else {
            cb(('Only images are allowed'));
        }
    },
});
router.post('/', upload.single('file'), linkController.create);
router.get('/', linkController.getAll);
router.get('/:id', linkController.getById);
router.put('/:id', linkController.update);
router.delete('/id', linkController.delete);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ status: 400, error: 'quá dung lượng' });
    } else {
        res.status(500).json({ status: 500, message: 'sai đuôi file' });
    }
});

module.exports = router;