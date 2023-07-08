const { AgendamentoModel } = require('../../models/agendamento-model');

/**
 * Cria nutricionista e retorna a nutricionista
 */
class FindAgendamentoController {
    async find(request, response) {
        try {

            // verifica se o id foi informado
            const { id } = request.body;

            // se não for informado id retorna todos os agendamentos
            if (!id) {
                const agendamentos = await AgendamentoModel.findAll({
                    order: [['data', 'ASC']]
                  });
                return response.status(200).json(agendamentos);
            }

            // se for informado id retorna o agendamento
            const agendamento = await AgendamentoModel.findOne({where: {id}});
            return response.status(200).json(agendamento);



        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new FindAgendamentoController();
