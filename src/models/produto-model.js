const { Model, DataTypes } = require("sequelize");

class ProdutoModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              descricao: {
                type: DataTypes.TEXT,
                allowNull: false,
              }
        }, {
            tableName: 'produto',
            modelName: 'produto',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.agendamento, {foreignKey: 'produto_id'})
    }
}

module.exports = { ProdutoModel };
