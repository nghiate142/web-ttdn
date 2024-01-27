const db = require("../db/index");
class VideosDao {
    async create(data) {
        return db.models.Video.create(data);
    }
    async findAll() {
        return await db.models.Video.findAll()
    }
    async findById(id) {
        return await db.models.Video.findOne({ where: { id: id } })
    }

    async delete(id) {
        return await db.models.Video.destroy(id)
    }
}
module.exports = new VideosDao()