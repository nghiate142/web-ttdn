const fileServer = require("../service/file.service")

class ImageController {
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
}