import { Ricetta } from "./entities/Ricetta"
import { AppDataSource } from "./dbSource"
import { Ingrediente } from "./entities/Ingrediente"
import { RicettaIngrediente } from "./entities/RicettaIngrediente"
import { UnitaMisura } from "./entities/UnitaMisura"

require('dotenv').config({ path: __dirname + "/.env" })


const list = async (req) => {
    const repoTag = AppDataSource.getRepository("Tag")
    const repoRicetta = AppDataSource.getRepository("Ricetta")


    console.log(req)
    let data = req.query
    
    if (Object.keys(data.filters).length === 0)
    {
        console.log("No filtri :)")
        return await repoRicetta.find({take: data.paging.limit, skip: data.paging.limit*(data.paging.page-1)})
    }

    let prompt = data.filters.prompt
    let tags = data.filters.tags

    


    // return await rep.find()
}

const id = async (id) => {
    let rep = AppDataSource.getRepository("Ricetta")
    return await rep.findOneBy({ id: id })
}

const post = async (recipe) => {
    // recipe = {
    //     data: {
    //         ricetta: {
    //             nome: "Pasta al pomodoro",
    //             ingredienti: [
    //                 {
    //                     id: 6,
    //                     nome: "Pomodoro",
    //                     quantita: 3,
    //                     unitaMisura: {
    //                         id: 1,
    //                         UnitaMisura: "unità",
    //                         peso: 1.0,
    //                         simbolo: "unità"
    //                     }
    //                 },
    //                 {
    //                     id: 4,
    //                     nome: "Pasta",
    //                     quantita: 180,
    //                     unitaMisura: {
    //                         id: 2,
    //                         UnitaMisura: "grammi",
    //                         peso: 1.0,
    //                         simbolo: "g"
    //                     }
    //                 }
    //             ],
    //             tags: [
    //                 {
    //                     id: 1,
    //                     nome: "Halal"
    //                 }
    //             ]
    //         }
    //     }
    // }

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