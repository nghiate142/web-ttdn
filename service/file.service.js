const video = require('../dao/videos.dao')
const image = require('../dao/images.dao')



class FileService {
    async uploadVideo(data) {
            return await video.create(data)
    }

    async uploadImage(data) {
            return await image.create(data);
    }
}

module.exports = new FileService();
