const db = require("../db/index");
class ImagesDao {
    async create(data) {
        try {
            return db.models.Image.create(data);
        } catch (error) {
            console.log(error)
            throw 'upload image error'
        }
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

    async delete(id) {
        return await db.models.Image.destroy({where: {id: id}})
    }
}

module.exports = new ImagesDao()