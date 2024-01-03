const users = require('../model/users.model');
const db = require("../db/index");
const bcrypt = require("bcryptjs");

class UsersDao {
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
}

module.exports = new UsersDao()