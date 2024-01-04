const db = require("../db/index");
class VideosDao {
    async create(data) {
        const idCategory = data.CategoryId
        const findCategory = await db.models.Videos.findOne({ where: { id: idCategory } })
        if (findCategory === null) {
            return 'category not found'
        }
        return db.models.Videos.create(data);
    }

    async findAll() {
        return await db.models.Videos.findAll()
    }

    async findById(id) {
        return await db.models.Videos.findOne({ where: { id: id } })
    }

    async findByCategory(id) {
        return await db.models.Videos.find({ where: { CategoryId: id } })
    }

    async update(id, data) {
        return await db.models.Videos.update(data, { where: { id: id } })
    }

    async delete(id) {
        return await db.models.Videos.destroy(id)
    }
}

module.exports = new VideosDao()