const { VarChar } = require("mssql")
var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Ricetta", // Senza 'tableName' utilizzerebbe il nome dell'entità come nome per la tabella
    tableName: "Ricette", // Di solito alle tabelle diamo il nome plurale.
    columns: {
        Nome: {
            primary: true,
            type: "int",
            generated: true,
        },
        Ingredienti: {
            type: "varchar",
            nullable: false
        },
        Tags: {
            type: "varchar",
            nullable: false,
            unique: true
        },
        Foto : {

        },
        Procedimento: {

        },
        FotoProcedimento: {

        },
        DurataPreparazione: {

        }, 
        NumeroDosi: {

        }
    },
})