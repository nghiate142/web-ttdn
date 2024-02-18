const fileService = require("../service/file.service");
class VideoController {
    async uploadVideo(req, res) {
        const link = req.file.path;
        const { title } = req.body;
        const data = {
            link: link,
            title: title
        };
        const newVideo = await fileService.uploadVideo(data);
        res.json({ success: true, data: newVideo });
    }

    async getUrlVideo(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlVideo(id)
        const imageUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: image });
    }

    async getAll(req, res) {
        const data = await fileService.getAllVideo()
        res.status(200).json({ success: true, data: data });
    }
}

module.exports = new VideoController()