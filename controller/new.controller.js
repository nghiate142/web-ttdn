const db = require("../db/index");
const newService = require('../service/news.service')

class NewController {
    async getAll(req, res) {
        try {
            const data = await newService.findAll();
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await newService.findById(id);
            if (!data) {
                res.status(404).json({ message: 'news not found', status: 404 });
                return;
            }
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async getByHostNew(req, res) {
        try {
            const hostNew = req.params.number;
            const data = await newService.getByHostNew(hostNew);
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async findByCategory(req, res) {
        try {
            const categoryId = req.body.category_id;
            const data = await newService.findByCategory(categoryId);
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const create = await newService.create(data);
            if (create === 'category not found') {
                res.status(400).json({ message: 'category not found', status: 400 });
                return;
            }
            res.status(201).json({ message: 'create success', data: create, status: 201 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const update = await newService.update(id, data);
            res.status(200).json({ message: 'update success', data: update, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await newService.delete(id);
            res.status(200).json({ message: 'entity deleted successfully', status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }
}
module.exports = new NewController();