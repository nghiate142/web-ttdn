const db = require("../db/index");
class ImagesDao {
    async create(data) {
        const idCategory = data.CategoryId
        const findCategory = await db.models.Image.findOne({ where: { id: idCategory } })
        if (findCategory === null) {
            return 'category not found'
        }
        return db.models.Image.create(data);
    }

    async findAll() {
        return await db.models.Image.findAll()
    }

    async findById(id) {
        return await db.models.Image.findOne({ where: { id: id } })
    }

    async findByCategory(id) {
        return await db.models.Image.find({ where: { CategoryId: id } })
    }

    async update(id, data) {
        return await db.models.Image.update(data, { where: { id: id } })
    }

    async delete(id) {
        return await db.models.Image.destroy(id)
    }
}

module.exports = new ImagesDao()