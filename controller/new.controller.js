const db = require("../db/index");
const newService = require('../service/news.service')

class NewController {
    async getAll(req, res) {
        // const data = await users.findAll();
        // res.json(data);
    }

    async getById(req, res) {
        const id = req.params.id;
        // const data = await users.findByPk(id);
        // res.json(data);
    }

    async create(req, res) {
        const data = req.body;
        const create = await newService.create(data);
        if (create === 'category not found') {
            return res.status(400).json({message: 'category not found', status: 400})
        }
        res.status(200).json({message: 'create success', data: create, status: 200})
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        // await users.update(data, { where: { id } });
        // const updatedEntity = await users.findByPk(id);
        // res.json(updatedEntity);
    }

    async delete(req, res) {
        const id = req.params.id;
        // await users.destroy({ where: { id } });
        res.json({ message: 'Entity deleted successfully' });
    }
}

module.exports = new NewController();