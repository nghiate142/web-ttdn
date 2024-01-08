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
        let data = [];
        const record = await image.findAll()
        for (let i = 0; i < record.length; i++) {
            let link = {}
            link.id = record[i].dataValues.id
            link.link = url+record[i].dataValues.link
            link.title = record[i].dataValues.title
            data.push(link)
        }
        return data
    }

    async deleteImage(id) {
        return await image.delete(id)
    }
}

module.exports = new FileService();
