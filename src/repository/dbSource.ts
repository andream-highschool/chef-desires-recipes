import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "sql_server",
    port: 1433,
    username: "sa",
    password: "1AAAaaa!",
    database: "Ricette",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/**/*.{js,ts}"],
    migrations: [],
    subscribers: [],
    options:{
        trustServerCertificate: true
    }
})
