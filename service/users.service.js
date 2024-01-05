const userDao = require('../dao/users.dao')
class UsersService {
    async create (data) {
        const create = await userDao.create(data)
        if (create === 'category not found') {
            return 'category not found'
        }
        return create
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
        await userDao.update(id, data)
        return await this.findById(id)
    }

    async delete(id) {
        return await userDao.delete(id)
    }
}

module.exports = new UsersService()