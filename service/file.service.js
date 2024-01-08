const image = require('../dao/images.dao')


const url = process.env.URL
class FileService {
    // async uploadVideo(data) {
    //         return await video.create(data)
    // }
    //
    // async getUrlVideo(id) {
    //     return await video.findById(id)
    // }
    //
    // async getAllVideo() {
    //     return await video.findAll()
    // }
    //
    // async deleteVideo(id) {
    //     return await video.delete(id)
    // }

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
