const db = require("../db");

class LinksDao {
    async create(data) {
        try {
            return await db.models.link.create(data);
        } catch (error) {
            console.error('Error in create:', error);
            throw new Error('Error creating user in database');
        }
    }

    async getAll() {
        return await db.models.link.findAll()
    }

    async getById(id) {
        return await db.models.link.findByPk(id)
    }

    async update(id, data) {
        return await db.models.link.update(data, { where: { id: id } })
    }

    async delete(id) {
        return await db.models.link.destroy({ where: { id: id } })
    }
}

module.exports = new LinksDao()