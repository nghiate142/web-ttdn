const db = require("../db/index");
class NewsDao {
    async create(data) {
        const idCategory = data.CategoryId
        const findCategory = await db.models.Categories.findOne({where: {id: idCategory}})
        if (findCategory === null) {
            return 'category not found'
        }
            return db.models.News.create(data);
    }
}

module.exports = new NewsDao()