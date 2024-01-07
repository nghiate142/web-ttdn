const userDao = require('../dao/users.dao')
const bcrypt = require("bcryptjs");
class UsersService {
    async create(data) {
        try {
            const salt = bcrypt.genSaltSync(10);
            data.password = await bcrypt.hashSync(data.password, salt);
            return await userDao.create(data);
        } catch (error) {
            console.error('Error in create:', error);
            throw new Error('Error creating user');
        }
    }
    async findAll() {
        return await userDao.getAll()
    }

    async findById(id) {
        return await userDao.getById(id)
    }

    async findByUsername(id) {
        return await userDao.findByUsername(id)
    }

    async update(id, data) {
        const salt = bcrypt.genSaltSync(10);
        data.password = await bcrypt.hashSync(data.password, salt)
        await userDao.update(id, data)
        return await this.findById(id)
    }

    async delete(id) {
        return await userDao.delete(id)
    }
}

module.exports = new UsersService()