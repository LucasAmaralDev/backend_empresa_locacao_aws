const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { AgendamentoModel } = require('../models/agendamento-model')
const {  ProdutoModel } = require('../models/produto-model')


const database = new Sequelize(configDatabase);

// init models
UserModel.init(database);
AgendamentoModel.init(database);
ProdutoModel.init(database)

// relationships
UserModel.associate(database.models);
AgendamentoModel.associate(database.models);
ProdutoModel.associate(database.models);


module.exports = database;
