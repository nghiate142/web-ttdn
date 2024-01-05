const fileService = require("../service/file.service")

class ImageController {
    async uploadImage(req, res) {
        try {
            const imagePath = req.file.path;
            const { title } = req.body;
            const data = {
                link: imagePath,
                title: title
            }
            const newImage = await fileService.uploadImage(data);
            res.json({ success: true, data: newImage });
        } catch (error) {
            console.error('Error uploading video:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getUrlImage(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlVideo(id)
        const imageUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: imageUrl });
    }

    async getAll(req, res) {
        const data = await fileService.getAllVideo()
        res.status(200).json({ success: true, data: data });
    }
}

module.exports = new ImageController()