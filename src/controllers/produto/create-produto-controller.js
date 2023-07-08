const {  ProdutoModel } = require('../../models/produto-model')

/**
 * Cria nutricionista e retorna a nutricionista
 */
class CreateProdutoController {
    async create(request, response) {
        try {

            // recebendo dados do body

            const { descricao } = request.body;

            // criação do produto   
            const produto = await ProdutoModel.create({
                descricao
            })

            // retorno do produto
            return response.status(201).json(produto)

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateProdutoController();
