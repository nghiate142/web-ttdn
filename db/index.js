const dbConfig = require("../config/config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: dbConfig.development.dialect,
    }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = {};
db.models.Users = require("../model/users.model")(sequelize, Sequelize.DataTypes);
db.models.Categories = require("../model/categories.model")(sequelize, Sequelize.DataTypes);
db.models.News = require("../model/news.model")(sequelize, Sequelize.DataTypes);
db.models.Image = require("../model/image.model")(sequelize, Sequelize.DataTypes)
db.models.Video = require("../model/videos.model")(sequelize, Sequelize.DataTypes)
db.models.link = require("../model/links.model")(sequelize, Sequelize.DataTypes)
db.models.Audio = require("../model/audios.model")(sequelize, Sequelize.DataTypes)
db.models.accessLog = require("../model/accesslog.model")(sequelize, Sequelize.DataTypes)


db.models.Categories.hasMany(db.models.News)

db.models.News.belongsTo(db.models.Categories)

module.exports = db;