const { AgendamentoModel } = require('../../models/agendamento-model');
const {  ProdutoModel } = require('../../models/produto-model')


/**
 * Cria nutricionista e retorna a nutricionista
 */
class UpdateAgendamentoController {
    async update(request, response) {
        try {
            
            const { id, data, produto_id} = request.body;

            // verificando se todos os dados foram recebidos
            if (!id) {
                return response.status(400).json({
                    error: 'Campos ausentes'
                })
            }

            if (!data ||!produto_id){
                return response.status(400).json({
                    error: 'Campos ausentes'
                })
            }

            // verificando se o produto existe
            const produto = await ProdutoModel.findOne({where: {id: produto_id}})
            if (!produto) {
                return response.status(400).json({
                    error: 'Produto não encontrado'
                })
            }

            // verificando se o agendamento existe
            const agendamento = await AgendamentoModel.findOne({where: {id: id}})

            if (!agendamento) {
                return response.status(400).json({
                    error: 'Agendamento não encontrado'
                })
            }

            // atualizando o agendamento
            await agendamento.update({
                data: data,
                produto_id: produto_id
            })

            // retornando o agendamento
            return response.status(200).json({
                message: 'Agendamento atualizado'
            })

            

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new UpdateAgendamentoController();
