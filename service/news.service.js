const newDao = require('../dao/news.dao')
class NewsService {
    async create(data) {
        const create = await newDao.create(data)
        if (create === 'category not found') {
            return 'category not found'
        }
        return create
    }
    async findAll() {
        return await newDao.findAll()
    }

    async findById(id) {
        return await newDao.findById(id)
    }

    async findByCategory(id) {
        return await newDao.findByCategory(id)
    }

    async update(id, data) {
        return await newDao.update(id, data)
    }

    async delete(id) {
        return await newDao.delete(id)
    }
}

module.exports = new NewsService()