const slug = require('../utils/slug')


const getCategoriaByID = db => async(id) => {
    const categoria = await db('categories').select('*').where('id', id)
    return categoria

}

const getCategorias =  db => async() => {

    const categorias = await db('categories').select('*')
   
    const categoriasWithSlug = categorias.map( categoria => {
        const newCategoria = { ...categoria, slug: slug(categoria.category) }
        return newCategoria
       
    })

    return categoriasWithSlug

}

module.exports = {
    getCategoriaByID,
    getCategorias
}
