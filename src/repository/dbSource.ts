import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 5533,
    username: "sa",
    password: "1AAAaaa!",
    database: "Test",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/**/*.{js,ts}"],
    migrations: [],
    subscribers: [],
    options:{
        trustServerCertificate: true
    }
})
