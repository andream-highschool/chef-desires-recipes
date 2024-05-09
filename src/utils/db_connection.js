const sql = require('mssql')

const sqlConfig = {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    server: process.env.DATABASE_SERVER,
    port: Number(process.env.DATABASE_PORT),
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // Per criptare, serve con i DB Azure (anche se non so Azure lo tengo communque)
        trustServerCertificate: true // Vero perché il nostro server non ha un certificato verificato, per cui gli diciamo noi di fidarsi
    }
}

/*********************************
 * Connect to DB and make a query
 * @param {String} query
 * @returns {Object}
*********************************/
const connect = async (query) => {
    try {
        const connection = await sql.connect(sqlConfig);
        const result = await connection.query(query);
        await connection.close();
        return result.recordset; // Restituisci i risultati della query
    } catch (error) {
        console.error("C'è stato un problema con la connessione al DB:", error);
        throw error; // Rilancia l'errore per gestirlo in un altro punto del codice, se necessario
    }
}

module.exports = connect