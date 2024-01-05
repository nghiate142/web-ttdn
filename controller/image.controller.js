const fileService = require("../service/file.service")

class ImageController {
    async uploadImage(req, res) {
        console.log(req.file.path)
            const link = req.file.path;
            const { title } = req.body;
            const data = {
                link: link,
                title: title
            };
            const newVideo = await fileService.uploadImage(data);
            res.json({ success: true, data: newVideo });
    }
}

module.exports = new ImageController();