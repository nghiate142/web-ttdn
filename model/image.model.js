module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Images", {
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
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM("1","2"),
            allowNull: false,
            defaultValue: "1"
        }
    });
};
