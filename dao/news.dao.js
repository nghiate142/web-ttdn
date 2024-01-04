const db = require("../db/index");
class NewsDao {
    async create(data) {
        const idCategory = data.CategoryId
        const findCategory = await db.models.Categories.findOne({where: {id: idCategory}})
        if (findCategory === null) {
            return 'category not found'
        }
            return db.models.News.create(data);
    }

    async findAll() {
        return await db.models.News.findAll()
    }

    async findById(id) {
        return await db.models.News.findOne({where: {id: id}})
    }

    async findByCategory(id) {
        return await db.models.News.find({where: {CategoryId: id}})
    }

    async update(id, data) {
        return await db.models.News.update(data, {where: {id: id}})
    }

    async delete(id) {
        return await db.models.News.destroy(id)
    }
}

module.exports = new NewsDao()