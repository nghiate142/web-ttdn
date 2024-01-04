const multer = require('multer');
const { Video, Image } = require('../models');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

class FileService {
    async uploadVideo(req, res) {
        try {
            const videoPath = req.file.path;
            const { title } = req.body;

            const newVideo = await Video.create({ title, path: videoPath });

            res.json({ success: true, data: newVideo });
        } catch (error) {
            console.error('Error uploading video:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async uploadImage(req, res) {
        try {
            const imagePath = req.file.path;
            const { title } = req.body;

            const newImage = await Image.create({ title, path: imagePath });

            res.json({ success: true, data: newImage });
        } catch (error) {
            console.error('Error uploading image:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new FileService();
