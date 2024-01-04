module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Categories", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('0','1'),
            allowNull: false,
            defaultValue: '1'
        }
    });
};
