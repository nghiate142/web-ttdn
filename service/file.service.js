const image = require('../dao/images.dao')
const video = require('../dao/videos.dao')
const audio = require("../dao/audios.dao")
const imageSlideService = require("../dao/image-slide.dao")



class FileService {
    async uploadVideo(data) {
        return await video.create(data)
    }

    async getUrlVideo(id) {
        return await video.findById(id)
    }

    async getAllVideo() {
        return await video.findAll()
    }

    async deleteVideo(id) {
        return await video.delete(id)
    }


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


    async uploadAudio(data) {
        return await audio.create(data);
    }

    async getUrlAudio(id) {
        return await audio.findById(id)
    }

    async getAllAudio() {
        return await audio.findAll()
    }

    async deleteAudio(id) {
        return await audio.delete(id)
    }

    async uploadImageSlide(data) {
        return await imageSlideService.create(data);
    }

    async getUrlImageSlide(id) {
        return await imageSlideService.findById(id)
    }

    async getAllImageSlide() {
        return await imageSlideService.findAll()
    }

    async deleteImageSlide(id) {
        return await imageSlideService.delete(id)
    }
}

module.exports = new FileService();
