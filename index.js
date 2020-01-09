const express = require('express')
const app = express()

const produto = require('./models/produto')

const categoria = require('./models/categoria')

app.set('view engine', 'ejs')

app.use(express.static('public'))

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'devshop'
    }
})

db.on('query', query => {
    console.log('SQL: ', query.sql)
})

const port = process.env.PORT || 3000

app.get('/', async(req, res) => {
    
    const categorias = await categoria.getCategorias(db)()
    
    res.render('home', { categorias })
})

app.get('/categoria/:id/:slug', async(req, res) => {

    const categorias = await categoria.getCategorias(db)()

    const cat = await categoria.getCategoriaByID(db)(req.params.id)

    const produtos = await produto.getProdutosByCatetoriaID(db)(req.params.id)
    
    res.render('category', { produtos, categorias, categoria: cat })
})

app.listen(port, err => {
    if(err){
        console.log('Não foi possivel iniciar o servidor')
    }else{
        console.log('Servidor Rodando')
    }
})