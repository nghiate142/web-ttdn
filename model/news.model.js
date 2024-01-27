module.exports = (sequelize, DataTypes) => {
    return sequelize.define("News", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shortTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        audio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        host_new: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: true,
            defaultValue: '0'
        },
        status: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: true,
            defaultValue: '1'
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
