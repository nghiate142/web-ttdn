const db = require("../db/index");
class AudioDao {
    async create(data) {
        return db.models.Audio.create(data);
    }
    async findAll() {
        return await db.models.Audio.findAll()
    }
    async findById(id) {
        return await db.models.Audio.findOne({ where: { id: id } })
    }

    async delete(id) {
        return await db.models.Audio.destroy(id)
    }
}
module.exports = new AudioDao()