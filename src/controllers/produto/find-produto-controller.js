const { ProdutoModel } = require('../../models/produto-model')

/**
 * Cria nutricionista e retorna a nutricionista
 */
class FindProdutoController {
    async find(request, response) {
        try {

            // verificando se recebeu o id do produto
            const { id } = request.params;

            // se nao recebeu o id do produto retorna todos os produtos

            if (!id) {
                const produtos = await ProdutoModel.findAll();

                return response.status(200).json(produtos);
            }

            const produto = await ProdutoModel.findOne({ where: { id } });

            return response.status(200).json(produto);

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new FindProdutoController();
