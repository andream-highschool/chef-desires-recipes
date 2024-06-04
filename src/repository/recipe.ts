import { Ricetta } from "./entities/Ricetta"
import { AppDataSource } from "./dbSource"
import { Ingrediente } from "./entities/Ingrediente"
import { RicettaIngrediente } from "./entities/RicettaIngrediente"
import { UnitaMisura } from "./entities/UnitaMisura"

import {Like} from "typeorm";

require('dotenv').config({ path: __dirname + "/.env" })

const relations = ['ingredienti', 'ingredienti.ingrediente','ingredienti.unitaMisura','tags']

const list = async (req) => {
    const repoTag = AppDataSource.getRepository("Tag")
    const repoRicetta = AppDataSource.getRepository("Ricetta")
    const repoIngredienti = AppDataSource.getRepository("Ingrediente")

    console.log(req)
    let data = req.query
    
    const output = []

    if (Object.keys(data.filters).length === 0)
    {
        console.log("No filtri :)")
        let ricette = await repoRicetta.find({ 
            relations: relations,
            take: data.paging.limit, 
            skip: data.paging.limit * (data.paging.page - 1) 
        }) as Ricetta[]
        
        ricette.forEach((ricetta) => {
            output.push({ricetta})
        })

        return output
    }

    let prompt = data.filters.prompt
    let tags = data.filters.tags

    let ricette = await repoRicetta.find({
        where: {
            nome: Like(`%${prompt}%`)
        },
        relations: relations,
        take: data.paging.limit, 
        skip: data.paging.limit * (data.paging.page - 1) 
    })

    ricette.forEach((ricetta) => {
        output.push({ricetta})
    })

    return output


    // return await rep.find()
}

const id = async (id) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.findOne({ where:{id: id}, relations: relations })
}

const post = async (recipe) => {


    console.log(recipe)
    
    const reposRicette = AppDataSource.getRepository("Ricetta")
    const reposIngredienti = AppDataSource.getRepository("Ingrediente")
    const reposRicettaIngredienti = AppDataSource.getRepository("RicettaIngrediente")
    const reposTags = AppDataSource.getRepository("Tag")
    const reposUnitaMisura = AppDataSource.getRepository("UnitaMisura")

    const ricetta: Ricetta = new Ricetta()
    ricetta.nome = recipe.nome

    const ingredienti: RicettaIngrediente[] = []

    // TODO: Riguardare qui
    recipe.ingredienti.forEach(async (ingrediente) => {
        const ingr: Ingrediente = await reposIngredienti.findOneBy({id: ingrediente.ingredienteId}) as Ingrediente
        
        const rI: RicettaIngrediente = new RicettaIngrediente()
        rI.ingrediente = ingr
        rI.ricetta = ricetta
        rI.quantita = ingrediente.quantita

        const um: UnitaMisura = await reposUnitaMisura.findOneBy({id: ingrediente.unitaMisura.id}) as UnitaMisura

        rI.unitaMisura = ingrediente.unitaMisura
        rI.unitaMisura = um

        ingredienti.push(rI)
    })

    ricetta.ingredienti = ingredienti
    ricetta.tags = []

    console.log("\n.-asdqwevb7ydvasyudvbu7ywqduyw\n")
    console.log(ricetta)
    reposRicette.save(ricetta)
    return ricetta
}

module.exports = {
    list,
    id,
    post
}