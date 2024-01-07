const Categories = require('../model/categories.model');
const categoryService = require('../service/categories.service')

class CategoryController {
    async getAll(req, res) {
        try {
            const data = await categoryService.findAll();
            res.status(200).json({ message: 'success', data, status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await categoryService.findById(id);
            if (!data) {
                res.status(404).json({ message: 'category not found', status: 404 });
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
            const create = await categoryService.create(data);
            if (!create) {
                res.status(400).json({ message: 'error creating category', status: 400 });
                return;
            }
            res.status(201).json({ message: 'create success', data: create, status: 201 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        const update = await categoryService.update(id, data)
        res.status(200).json({message: 'update success', data: update, status: 200})
    }

    async updateStatus(req, res) {
        const id = req.params.id;
        const update = await categoryService.updateStatus(id)
        res.status(200).json({message: 'update success', data: update, status: 200})
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deleted = await categoryService.delete(id);
            if (!deleted) {
                res.status(404).json({ message: 'category not found for deletion', status: 404 });
                return;
            }
            res.status(200).json({ message: 'delete success', status: 200 });
        } catch (error) {
            res.status(500).json({ message: 'internal server error', error });
        }
    }

}

module.exports = new CategoryController();