const db = require("../db/index");
class NewsDao {
    async create(data) {
        const idCategory = parseInt(data.category_id);
        const findCategory = await db.models.Categories.findOne({ where: { id: idCategory } });
        if (!findCategory) {
            return 'category not found';
        }
        data.CategoryId = idCategory;
        return db.models.News.create(data);
    }


    async findAll() {
        try {
            const data = await db.models.News.findAll({ include: [{ model: db.models.Categories, attributes: ['name'] }] })
            return data.map(news => {
                return {
                    id: news.id,
                    title: news.title,
                    content: news.content,
                    short_title: news.shortTitle,
                    link_image: news.image,
                    link_video: news.video,
                    category_id: news.CategoryId,
                    category_name: news.Category ? news.Category.name : null
                };
            });
        } catch (error) {
            throw error;
        }
    }

    async finByHostNew(hostNew){
        return await db.models.News.findAll({ where: {host_new: hostNew}})
    }

    async findById(id) {
        return await db.models.News.findOne({ where: { id: id } })
    }

    async findByCategory(id) {
        try {
            const newsList = await db.models.News.findAll({
                where: { CategoryId: id },
                include: [{ model: db.models.Categories, attributes: ['name'] }]
            });
            return newsList.map(news => {
                return {
                    id: news.id,
                    title: news.title,
                    content: news.content,
                    short_title: news.shortTitle,
                    link_image: news.image,
                    link_video: news.video,
                    category_name: news.Category ? news.Category.name : null
                };
            });
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        return await db.models.News.update(data, { where: { id: id } })
    }

    async delete(id) {
        return await db.models.News.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new NewsDao()