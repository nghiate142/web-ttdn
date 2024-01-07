const categoryDao = require('../dao/categories.dao')
class CategoriesService {
    async create(data) {
        return await categoryDao.create(data)
    }

    async findById(id) {
        return await categoryDao.getById(id)
    }

    async findAll() {
        return await categoryDao.get()
    }

    async update(id, data) {
        return await categoryDao.update(id, data)
    }

    async updateStatus(id) {
        return await categoryDao.updateStatus(id)
    }

    async delete(id) {
        const deletedRowCount = await categoryDao.delete(id);
        return deletedRowCount > 0;
    }
}

module.exports = new CategoriesService()