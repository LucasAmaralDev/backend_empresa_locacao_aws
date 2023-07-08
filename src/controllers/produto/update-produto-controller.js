const { ProdutoModel } = require('../../models/produto-model')

/**
 * Cria nutricionista e retorna a nutricionista
 */
class UpdateProdutoController {
    async update(request, response) {
        try {


            // recebendo dados do body
            const { id, descricao } = request.body;

            // verificando se o produto existe
            const produtoExistente = await ProdutoModel.findOne({ where: { id } });

            if (!produtoExistente) {
                return response.status(400).json({
                    error: 'Produto não encontrado'
                })
            }

            // atualizando o produto
            await ProdutoModel.update({ descricao }, { where: { id } });

            return response.status(200).json({
                message: 'Produto atualizado com sucesso'
            })

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new UpdateProdutoController();
