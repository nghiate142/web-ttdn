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
db.models.Users = require("../model/user.model")(sequelize, Sequelize.DataTypes);

module.exports = db;