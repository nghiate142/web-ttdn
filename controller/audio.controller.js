
class AudioController {
    async uploadAudio(req, res) {
        const link = req.file;
        const url = process.env.URL
        const path = `${url}${link.path}`
        res.json({ success: true, data: link.path });
    }
}

module.exports = new AudioController()