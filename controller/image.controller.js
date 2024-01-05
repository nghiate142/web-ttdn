const fileService = require("../service/file.service")

class ImageController {
    async uploadImage(req, res) {
        try {
            const link = req.file.path;
            const { title } = req.body;
            const data = {
                link: link,
                title: title
            };
            const newVideo = await fileService.uploadImage(data);
            res.status(200).json({ success: true, data: newVideo });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }

    async getUrlImage(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlImage(id)
        const imageUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: imageUrl });
    }

    async getAll(req, res) {
        const data = await fileService.getAllImage()
        res.status(200).json({ success: true, data: data });
    }
}

module.exports = new ImageController();