const fileServer = require("../service/file.service")
const fileService = require("../service/file.service");

class VideoController {
    async uploadVideo(req, res) {
        const link = req.file.path;
        const { title } = req.body;
        const data = {
            link: link,
            title: title
        };
        console.log(link)
        const newVideo = await fileService.uploadVideo(data);
        res.json({ success: true, data: newVideo });
    }

    async getUrlVideo(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlVideo(id)
        const videoUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: videoUrl });
    }

    async getAll(req, res) {
        const data = await fileService.getAllVideo()
        res.status(200).json({ success: true, data: data });
    }
}

module.exports = new VideoController()