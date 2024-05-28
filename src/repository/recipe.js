

require('dotenv').config({path:__dirname+"/.env"})

const { AppDataSource } = require("./dbSource.ts")


const list = async (limit, page, sortBy) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.find()
}

const id = async (id) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.findOneBy({id: id})
}

module.exports = {
    list,
    id
}