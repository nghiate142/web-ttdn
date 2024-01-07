const fileService = require("../service/file.service")

class ImageController {
    async uploadImage(req, res) {
        try {
            const imagePath = req.file;
            console.log(imagePath)
            const { title, type } = req.body;
            const originalNameWithoutExtension = imagePath.originalname.split('.')[0];
            imagePath.path = `${imagePath.destination}${originalNameWithoutExtension}-${imagePath.filename}`;
            const data = {
                link: imagePath.path,
                title: title,
                type: type
            }
            const newImage = await fileService.uploadImage(data);
            res.json({ success: true, data: newImage });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async uploadImageNew(req,res) {
        try {
            const imagePath = req.file;
            console.log(imagePath)
            const url = process.env.URL
            const path = `${url}${imagePath.path}`
            res.json({ success: true, data: path });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getUrlImage(req, res) {
        const id = req.params.id
        const url = process.env.URL
        const image = await fileService.getUrlImage(id)
        const imageUrl = `${url}${image.link}`;
        return res.status(200).json({ success: true, data: imageUrl });
    }

    async getAll(req, res) {
        const data = await fileService.getAllImage()
        res.status(200).json({ success: true, data: data });
    }

    async delete(req, res) {
        const id = req.params.id
        await fileService.deleteImage(id)
        res.status(200).json({ success: 'delete success' });
    }
}

module.exports = new ImageController()