const fileServer = require("../service/file.service")
const fileService = require("../service/file.service");

class VideoController {
    async uploadVideo(req, res) {
        const link = req.file;
        const { title } = req.body;
        const originalNameWithoutExtension = link.originalname.split('.')[0];
        link.path = `${link.destination}${originalNameWithoutExtension}-${link.filename}`;
        const data = {
            link: link.path,
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

    async delete(req, res) {
        const id = req.params.id
        await fileService.deleteVideo(id)
        res.status(200).json({ success: 'delete success' });
    }
}

module.exports = new VideoController()