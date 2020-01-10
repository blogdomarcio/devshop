const getProdutosByCatetoriaID = db => async(id) => {
    const produtos = await db('products').select('*').where('id', function(){
        this
        .select('categories_products.product_id')
        .from('categories_products')
        .whereRaw('categories_products.product_id = products.id')
        .where('category_id', id)
    })
    return produtos
}


const getProduto = db => async(id) => {
    const produto = await db('products').select('*').where('id', id)

    return produto[0]
}

module.exports = {
    getProdutosByCatetoriaID,
    getProduto
}