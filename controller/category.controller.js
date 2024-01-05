const Categories = require('../model/categories.model');
const categoryService = require('../service/categories.service')

class CategoryController {
    async getAll(req, res) {
        const data = await categoryService.findAll();
        res.status(200).json({message: 'success', data: data, status: 200});
    }

    async getById(req, res) {
        const id = req.params.id;
        const data = await categoryService.findById(id)
        res.status(200).json({message: 'success', data: data, status: 200});
    }

    async create(req, res) {
        try {
            const data = req.body
            const create = await categoryService.create(data)
            if (!create) {
                res.status(400).json({message: 'error'})
            }
            res.status(200).json({message: 'create success', data: create, status: 200})
        } catch (error) {
            return false
        }
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        console.log(id)
        const update = await categoryService.update(id, data)
        res.status(200).json({message: 'update success', data: update, status: 200})
    }

    async updateStatus(req, res) {
        const id = req.params.id;
        const update = await categoryService.updateStatus(id)
        res.status(200).json({message: 'update success', data: update, status: 200})
    }

    async delete(req, res) {
        const id = req.params.id;
        await categoryService.delete(id)
        res.status(200).json({message: 'delete success', status: 200})
    }
}

module.exports = new CategoryController();