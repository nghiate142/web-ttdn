const newDao = require('../dao/news.dao')
class NewsService {
    async create (data) {
        const create = await newDao.create(data)
        if (create === 'category not found') {
            return 'category not found'
        }
        return create
    }
}

module.exports = new NewsService()