const { UserModel } = require('../../models/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class CreateUserController {
    async create(request, response) {
        try {
            const { username, password } = request.body;

            //verificando se os parametros foram recebidos corretamente
            if (!username ||!password) {
                return response.status(400).json({
                    error: 'Campos ausentes'
                });
            }

            //verificando se o usuario existe
            const user = await UserModel.findOne({ where: { username } });
            if (user) {
                return response.status(400).json({
                    error: 'Usuário já cadastrado'
                });
            }

            // criando o usuario
            const criarUsuario = await UserModel.create({
                username,
                password
            })
            
            // retornando o usuario criado
            return response.status(201).json({
                user: criarUsuario
            });

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new CreateUserController();
