const { AgendamentoModel } = require('../../models/agendamento-model');
const {  ProdutoModel } = require('../../models/produto-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class CreateAgendamentoController {
    async create(request, response) {
        try {
            
            // recebendo dados do body
            const { data, produto_id} = request.body;

            // verificando se os dados foram recebidos
            if (!data ||!produto_id) {
                return response.status(400).json({
                    error: 'Dados ausentes'
                })
            }

            // verificando se os dados dese agendamento ja existem
            const agendamento = await AgendamentoModel.findOne({ where: { produto_id, data }});

            if (agendamento) {
                return response.status(400).json({
                    error: 'Agendamento já existe'
                })
            }

            // verificando se o produto existe
            const produto = await ProdutoModel.findOne({where: { id: produto_id }});

            if (!produto) {
                return response.status(400).json({
                    error: 'Produto não existe'
                })
            }

            // criando agendamento
            const agendamentoCriado = await AgendamentoModel.create({ data, produto_id });

            return response.status(201).json(agendamentoCriado);



        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateAgendamentoController();
