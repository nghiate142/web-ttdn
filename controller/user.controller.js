const userService = require('../service/users.service')


class UserController {
    async getAll(req, res) {
        const data = await userService.findAll();
        res.status(200).json({message: 'success', data: data});
    }

    async getById(req, res) {
        const id = req.params.id;
        const data = await userService.findById(id);
        res.status(200).json({message: 'success', data: data});
    }

    async create(req, res) {
        const data = req.body;
        const newEntity = await userService.create(data);
        res.status(200).json({message: 'success', data: newEntity});
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        const updatedEntity = await userService.update(id, data);
        res.status(200).json({message: 'success', data: updatedEntity});
    }

    async delete(req, res) {
        const id = req.params.id;
        await userService.delete(id);
        res.status(200).json({message: 'delete success'});
    }
}

module.exports = new UserController();