const db = require("../db/index");

class CategoriesDao {
    async create(data) {
        try {
            return await db.models.Categories.create(data);
        } catch (error) {
            return false
        }
    }

    async get() {
        return await db.models.Categories.findAll()
    }

    async getById(id) {
        return await db.models.Categories.findOne({ where: { id: id } })
    }

    async updateStatus(id) {
        await db.models.Categories.update({ status: '0' }, { where: { id: id } })
        return await db.models.Categories.findOne({ where: { id: id } })
    }

    async update(id, data) {
        await db.models.Categories.update(data, { where: { id: id } })
        return await db.models.Categories.findOne({ where: { id: id } })
    }

    async delete(id) {
        return await db.models.Categories.destroy({ where: { id: id } });
    }

}

module.exports = new CategoriesDao()