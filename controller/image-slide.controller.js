const fileService = require("../service/file.service")
const unidecode = require('unidecode');

class ImageSlideController {
    async convertToEnglishWithoutDiacritics(input) {
        return unidecode(input);
    };

    async uploadImageSlide(req, res) {
        try {
            const imagePath = req.file;
            const data = {
                link: imagePath.path,
                title: imagePath.originalname,
            }
            const newImage = await fileService.uploadImageSlide(data);
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

    async getUrlImageSlide(req, res) {
        try {
            const id = req.params.id
            const url = process.env.URL
            const image = await fileService.getUrlImageSlide(id)
            const imageUrl = `${url}${image.link}`;
            return res.status(200).json({ success: true, data: image.link });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllImageSlide(req, res) {
        try {
            const data = await fileService.getAllImageSlide()
            res.status(200).json({ success: true, data: data });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req, res) {
        const id = req.params.id
        await fileService.deleteImageSlide(id)
        res.status(200).json({ success: 'delete success' });
    }
}

module.exports = new ImageSlideController()