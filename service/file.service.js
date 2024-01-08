const image = require('../dao/images.dao')


class FileService {
    async uploadImage(data) {
        return await image.create(data);
    }

    async getUrlImage(id) {
        return await image.findById(id)
    }

    async getAllImage() {
        return await image.findAll()
    }

    async deleteImage(id) {
        return await image.delete(id)
    }
}

module.exports = new FileService();
