const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
    }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = {};
db.models.Users = require("../model/users.model")(sequelize, Sequelize.DataTypes);
db.models.Categories = require("../model/categories.model")(sequelize, Sequelize.DataTypes);
db.models.News = require("../model/news.model")(sequelize, Sequelize.DataTypes);
db.models.Videos = require("../model/video.model")(sequelize, Sequelize.DataTypes)
db.models.Image = require("../model/image.model")(sequelize, Sequelize.DataTypes)


db.models.Categories.hasMany(db.models.News)

db.models.News.belongsTo(db.models.Categories)

module.exports = db;