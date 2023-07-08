const { ProdutoModel } = require('../../models/produto-model')

/**
 * Cria nutricionista e retorna a nutricionista
 */
class DeleteProdutoController {
    async delete(request, response) {
        try {

            // recebendo id do produto
            const { id } = request.body;

            // verificando se o produto existe
            const produto = await ProdutoModel.findOne({ where: { id } });

            if (!produto) {
                return response.status(404).json({
                    error: 'Produto não encontrado'
                })
            }

            // deletando o produto
            const deletarProduto = await ProdutoModel.destroy({ where: { id } });

            return response.status(200).json({
                message: 'Produto deletado com sucesso'
            })


        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new DeleteProdutoController();
