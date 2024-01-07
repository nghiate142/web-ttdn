
class VideoController {
    async uploadVideo(req, res) {
        const link = req.file;
        const url = process.env.URL
        const path = `${url}${link.path}`
        res.json({ success: true, data: path });
    }
}

module.exports = new VideoController()