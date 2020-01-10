const produto = require('../models/produto')


const getProduto = db => async(req, res) => {
    
    const prod = await produto.getProduto(db)(req.params.id)

    res.render('produto', { produto: prod, },  )
}

module.exports = {
    getProduto
}