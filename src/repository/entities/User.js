const { VarChar } = require("mssql")
var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "User", // Senza 'tableName' utilizzerebbe il nome dell'entità come nome per la tabella
    tableName: "Users", // Di solito alle tabelle diamo il nome plurale.
    columns: {
        id_user: {
            primary: true,
            type: "int",
            generated: true,
        },
        username: {
            type: "varchar",
            nullable: false
        },
        token: {
            type: "varchar",
            nullable: false,
            unique: true
        }
    },
})