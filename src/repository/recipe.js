require('dotenv').config({path:__dirname+"/.env"})
const query = require('../utils/db_connection')
  

const list = async (limit, page, sortBy) => {
    let q = await query('SELECT * FROM Ingredienti')
    return q
}

const id = async (id) => {
    return await query(`SELECT * FROM Ingredienti WHERE IdI = ${id}`)
}

module.exports = {
    list,
    id
}