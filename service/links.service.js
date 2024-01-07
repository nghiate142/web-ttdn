const linkDao = require("../dao/links.dao")

class LinksService {
    async create(data) {
        return await linkDao.create(data);
    }

    async findAll() {
        return await linkDao.getAll()
    }

    async findById(id) {
        return await linkDao.getById(id)
    }


    async update(id, data) {
        return await linkDao.update(id, data)
    }

    async delete(id) {
        return await linkDao.delete(id)
    }
}

module.exports = new LinksService()