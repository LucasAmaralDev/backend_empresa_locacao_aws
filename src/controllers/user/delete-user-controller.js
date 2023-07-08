
const { UserModel } = require('../../models/user-model');


/**
 * Criar usuário e retorna um token de acesso
 */
class DeleteUserController {
    async delete(request, response) {
        try {
            const { id } = request.body;
            console.log(id)
            // verifica se recebeu foi recebido um id
            if (!id) {
                return response.status(400).json({
                    error: 'O id deve ser informado'
                });
            }

            // verifica se o usuário existe
            const user = await UserModel.findOne({
                where: {
                    id
                }
            })

            if (!user) {
                return response.status(404).json({
                    error: 'Usuário não encontrado'
                });
            }

            // se o usuário existe, deleta o usuário
            await UserModel.destroy({
                where: {
                    id
                }
            });

            return response.status(201).json({
                message: "Usuario deletado com sucesso"
            });

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new DeleteUserController();
