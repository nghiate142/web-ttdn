const fileService = require("../service/file.service")
const unidecode = require('unidecode');

class ImageController {
    async convertToEnglishWithoutDiacritics(input) {
        return unidecode(input);
    };

    async uploadImage(req, res) {
        try {
            const imagePath = req.file;
            const data = {
                link: imagePath.path,
                title: imagePath.originalname,
            }
            const newImage = await fileService.uploadImage(data);
            res.json({ success: true, data: newImage });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async uploadImageNew(req, res) {
        try {
            const imagePath = req.file;
            const url = process.env.URL
            const path = `${url}${imagePath.path}`
            res.json({ success: true, data: imagePath.path });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getUrlImage(req, res) {
        try {
            const id = req.params.id
            const url = process.env.URL
            const image = await fileService.getUrlImage(id)
            const imageUrl = `${url}${image.link}`;
            return res.status(200).json({ success: true, data: image.link });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAll(req, res) {
        try {
            const data = await fileService.getAllImage()
            res.status(200).json({ success: true, data: data });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req, res) {
        const id = req.params.id
        await fileService.deleteImage(id)
        res.status(200).json({ success: 'delete success' });
    }
}

module.exports = new ImageController()