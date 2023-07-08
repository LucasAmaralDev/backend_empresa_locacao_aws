const { AgendamentoModel } = require('../../models/agendamento-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class DeleteAgendamentoController {
    async delete(request, response) {
        try {
            
            // recebendo o id da agendamento
            const { id } = request.body;

            // verificando se o id existe
            if (!id) {
                return response.status(400).json({
                    error: 'Id não informado'
                })
            }
            
            // verificando se a agendamento existe
            const agendamento = await AgendamentoModel.findOne({where :{id}});
            if (!agendamento) {
                return response.status(400).json({
                    error: 'Agendamento não encontrado'
                })
            }

            // excluindo o agendamento
            await AgendamentoModel.destroy({ where: {id: id}});

            return response.status(200).json({
                message: 'Agendamento excluído com sucesso'
            });

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new DeleteAgendamentoController();
