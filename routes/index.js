const init = (db) => {

    
    const categorias = require('./categorias')

    const produtos = require('./produtos')

    const router = require('express').Router()

    const index = require('../controllers/index')

    router.get('/', index.getIndex)

    router.use('/categoria', categorias(db))

    router.use('/produto', produtos(db))

     

    return router

}

module.exports = init
