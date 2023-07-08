
const { UserModel } = require('../../models/user-model');


/**
 * Criar usuário e retorna um token de acesso
 */
class FindUserController {
    async find(request, response) {
        try {
            const { username } = request.body;

            //se nenhum nome for passado, retorna todos os usuarios cadastrados
            if (!username) {
                const users = await UserModel.findAll();
                return response.status(200).json(users);
            }

            //se o nome for passado, retorna o usuário com o nome passado
            const user = await UserModel.findOne({ where: { username } });
            return response.status(200).json(user);

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new FindUserController();
