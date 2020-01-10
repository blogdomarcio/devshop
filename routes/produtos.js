const init = db => {

    const router = require('express').Router()

    const produtoController = require('../controllers/produtos')

    router.get('/:id', produtoController.getProduto(db))

    return router
}

module.exports = init