const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            username: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            tableName: 'users',
            modelName: 'users',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        // this.hasMany(models.Nutritionist, { foreignKey: 'userId' });
    }
}

module.exports = { UserModel };
