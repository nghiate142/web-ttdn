const db = require("../db/index");
class ImageSlideDao {
    async create(data) {
        try {
            return db.models.image_slide.create(data);
        } catch (error) {
            throw 'upload image error'
        }
    }

    async findAll() {
        return await db.models.image_slide.findAll()
    }

    async findById(id) {
        return await db.models.image_slide.findOne({ where: { id: id } })
    }

    async delete(id) {
        return await db.models.image_slide.destroy({ where: { id: id } })
    }
}

module.exports = new ImageSlideDao()