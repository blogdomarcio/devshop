const init = db => {

    const router = require('express').Router()

    const categoriasController = require('../controllers/categorias')

    router.get('/:id/:slug', categoriasController.getCategoria(db))

    return router

}

module.exports = init