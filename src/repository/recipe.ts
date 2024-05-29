import { Ricetta } from "./entities/Ricetta"
import { AppDataSource } from "./dbSource"

require('dotenv').config({path:__dirname+"/.env"})


const list = async (limit, page, sortBy) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.find()
}

const id = async (id) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.findOneBy({id: id})
}

const post = async (recipe) => {
    let rep = AppDataSource.getRepository("Ricetta")
    
    let ricetta = new Ricetta()
    ricetta.nome = recipe.nome
    await rep.save(ricetta)
    
    return ricetta;
}

module.exports = {
    list,
    id,
    post
}