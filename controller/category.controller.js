const Categories = require('../model/categories.model');
const db = require("../db/index");
const bcrypt = require("bcryptjs");

class CategoryController {
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
        const newEntity = await db.models.Categories.create(data);
        res.json(newEntity);
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

module.exports = new CategoryController();