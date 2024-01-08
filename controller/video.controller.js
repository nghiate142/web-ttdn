
class VideoController {
    async uploadVideo(req, res) {
        try {
            const link = req.file;
            const url = process.env.URL
            const path = `${url}${link.path}`
            res.json({ success: true, data: link.path });
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new VideoController()