const userService = require('../service/users.service')


class UserController {
    async getAll(req, res) {
        try {
            const data = await userService.findAll();
            res.status(200).json({ message: 'success', data: data });
        } catch (error) {
            console.error('Error in getAll:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await userService.findById(id);
            res.status(200).json({ message: 'success', data: data });
        } catch (error) {
            console.error('Error in getById:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const newEntity = await userService.create(data);
            res.status(200).json({ message: 'success', data: newEntity });
        } catch (error) {
            console.error('Error in create:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedEntity = await userService.update(id, data);
            res.status(200).json({ message: 'success', data: updatedEntity });
        } catch (error) {
            console.error('Error in update:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await userService.delete(id);
            res.status(200).json({ message: 'delete success' });
        } catch (error) {
            console.error('Error in delete:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = new UserController();
