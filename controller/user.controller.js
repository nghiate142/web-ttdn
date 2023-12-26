const users = require('../model/user.model');
const db = require("../db/index");
const bcrypt = require("bcryptjs");

class UserController {
    async getAll(req, res) {
        const data = await users.findAll();
        res.json(data);
    }

    async getById(req, res) {
        const id = req.params.id;
        const data = await users.findByPk(id);
        res.json(data);
    }

    async create(req, res) {
        const data = req.body;
        const salt = bcrypt.genSaltSync(10);
        data.password = await bcrypt.hashSync(data.password, salt)
        const newEntity = await db.models.Users.create(data);
        res.json(newEntity);
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        await users.update(data, { where: { id } });
        const updatedEntity = await users.findByPk(id);
        res.json(updatedEntity);
    }

    async delete(req, res) {
        const id = req.params.id;
        await users.destroy({ where: { id } });
        res.json({ message: 'Entity deleted successfully' });
    }
}

module.exports = new UserController();