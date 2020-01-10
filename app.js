const init = db => {

    const express = require('express')

    const app = express()

    const categoria = require('./models/categoria')

    const routes = require('./routes')

    app.set('view engine', 'ejs')

    app.use(express.static('public'))

    app.use(async(req, res, next) => {
        const categorias = await categoria.getCategorias(db)()
        res.locals = {
            categorias
        }
        next()
    })


    app.use(routes(db))

    return app

}

module.exports = init