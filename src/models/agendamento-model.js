const { Model, DataTypes } = require("sequelize");

class AgendamentoModel extends Model {
  static init(database) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'produto',
          key: 'id'
        }
      }
    }, {
      tableName: 'agendamento',
      modelName: 'agendamento',
      timestamps: false,
      sequelize: database
    });
  }

  static associate(models) {
    this.belongsTo(models.produto, { foreignKey: 'produto_id' });
  }
}

module.exports = { AgendamentoModel };
