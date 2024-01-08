const linkService = require("../service/links.service")

class LinksController {
    async getAll(req, res) {
        try {
            const data = await linkService.findAll();
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await linkService.findById(id);
            if (!data) {
                res.status(404).json({ message: 'news not found', status: 404 });
                return;
            }
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const imagePath = req.file;
            const url = process.env.URL
            const path = `${url}${imagePath.path}`
            const dataCreate = {
                link: data.link,
                image: imagePath.path
            }
            const create = await linkService.create(dataCreate);
            res.status(201).json({ message: 'create success', data: create, status: 201 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const update = await linkService.update(id, data);
            res.status(200).json({ message: 'update success', data: update, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await linkService.delete(id);
            res.status(200).json({ message: 'entity deleted successfully', status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }
}

module.exports = new LinksController()