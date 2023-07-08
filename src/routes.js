const { Router } = require('express');


// COntrollers
//Users
const createUserController = require('./controllers/user/create-user-controller');
const findUsersController = require('./controllers/user/find-user-controller');
const updateUserController = require('./controllers/user/update-user-controller');
const deleteUserController = require('./controllers/user/delete-user-controller');

// Agendamento

const createAgendamentoController = require('./controllers/agendamento/create-agendamento-controller');
const findAgendamentoController = require('./controllers/agendamento/find-agendamento-controller');
const updateAgendamentoController = require('./controllers/agendamento/update-agendamento-controller');
const deleteAgendamentoController = require('./controllers/agendamento/delete-agendamento-controller');

// Produto

const createProdutoController = require('./controllers/produto/create-produto-controller');
const findProdutoController = require('./controllers/produto/find-produto-controller');
const updateProdutoController = require('./controllers/produto/update-produto-controller');
const deleteProdutoController = require('./controllers/produto/delete-produto-controller');



const routes = Router();

// Users
routes.post('/user', createUserController.create);
routes.get('/user', findUsersController.find);
routes.put('/user', updateUserController.update);
routes.delete('/user', deleteUserController.delete);

// Agendamento

routes.post('/agendamento', createAgendamentoController.create);
routes.get('/agendamento', findAgendamentoController.find);
routes.put('/agendamento', updateAgendamentoController.update);
routes.delete('/agendamento', deleteAgendamentoController.delete);

// Produto

routes.post('/produto', createProdutoController.create);
routes.get('/produto', findProdutoController.find);
routes.put('/produto', updateProdutoController.update);
routes.delete('/produto', deleteProdutoController.delete);



module.exports = { routes };
