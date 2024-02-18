module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Videos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // hot_video: {
        //     type: DataTypes.ENUM('0', '1'),
        //     allowNull: true,
        //     defaultValue: '0'
        // },
    });
};
