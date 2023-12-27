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
console.log(db.sequelize)
db.Sequelize = Sequelize;
db.models = {};
db.models.Users = require("../model/users.model")(sequelize, Sequelize.DataTypes);
db.models.Categories = require("../model/categories.model")(sequelize, Sequelize.DataTypes);
db.models.News = require("../model/news.model")(sequelize, Sequelize.DataTypes);

module.exports = db;