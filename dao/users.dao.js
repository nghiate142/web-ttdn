const db = require("../db/index");
const bcrypt = require("bcryptjs");

class UsersDao {
    async create(data) {
        return await db.models.Users.create(data)
    }

    async getAll() {
        return await db.models.Users.findAll()
    }

    async getById(id) {
        return await db.models.Users.findByPk(id)
    }

    async findByUsername(username) {
        return await db.models.Users.findOne({
            where: {
                username: username
            }
        })
    }

    async update(id, data) {
        return await db.models.Users.update(data, { where: { id: id } })
    }

    async delete(id) {
        return await db.models.Users.destroy({ where: { id: id } })
    }
}

module.exports = new UsersDao()