module.exports = (sequelize, DataTypes) => {
    return sequelize.define("AccessLog", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ipAddress: {
            type: DataTypes.STRING,
        },
        method: {
            type: DataTypes.STRING,
        },
        path: {
            type: DataTypes.STRING,
        },
    });
};