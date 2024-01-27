const fileService = require("../service/file.service");
class AudioController {
    async uploadAudio(req, res) {
        const link = req.file.path;
        const { title } = req.body;
        const data = {
            link: link,
            title: title
        };
        const newAudio = await fileService.uploadAudio(data);
        res.json({ success: true, data: newAudio });
    }

    async getUrlAudio(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlAudio(id)
        const imageUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: imageUrl });
    }

    async getAll(req, res) {
        const data = await fileService.getAllAudio()
        res.status(200).json({ success: true, data: data });
    }
}

module.exports = new AudioController()