
const { UserModel } = require('../../models/user-model');


/**
 * Criar usuário e retorna um token de acesso
 */
class UpdateUserController {
    async update(request, response) {
        try {
            const { username, password, id } = request.body;

            // verifica se foi passado o id do usuário
            if (!id) {
                return response.status(400).json({
                    error: 'O id do usuário não foi passado'
                });
            }

            // verifica se foi passado algum outro campo do usuario para atualizar
            if (!username ||!password) {
                return response.status(400).json({
                    error: 'Não foi passado nenhuma informação para atualizar'
                });
            }

            // verifica se o usuário existe
            const user = await UserModel.findOne({ where: { id } });

            if (!user) {
                return response.status(400).json({
                    error: 'O usuário não existe'
                });
            }

            // atualiza o usuário
            await UserModel.update(
                { username, password },
                { where: { id } }
            );

            return response.status(200).json({
                message: 'Usuário atualizado com sucesso'
            });

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new UpdateUserController();
