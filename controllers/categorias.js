const produto = require('../models/produto')

const categoria = require('../models/categoria')


const getCategoria = db => async(req, res) => {

    const cat = await categoria.getCategoriaByID(db)(req.params.id)

    const produtos = await produto.getProdutosByCatetoriaID(db)(req.params.id)
    
    res.render('category', { produtos, categoria: cat })
}

 module.exports = {
     getCategoria
 }