const typeorm = require("typeorm")

const dbSource = new typeorm.DataSource({
    type: "mssql",
    host: "localhost",
    port: 5543,
    username: "sa",
    password: "<YourStrong!Passw0rd>",
    database: "recipes",
    synchronize: true,
    entities: [require("./entities/User")],
})

dbSource
    .initialize()
    .then(function () {
        console.log("Datasource operativa")
    })
    .catch(function (error) {
        console.log("Error: ", error)
    })

module.exports = {
    dbSource: dbSource
}