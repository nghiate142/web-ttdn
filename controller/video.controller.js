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
}

module.exports = new VideoController()