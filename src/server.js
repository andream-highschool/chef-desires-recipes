const express = require('express')
const cors = require('cors')
const server = express()

// Parse json request body
server.use(express.json());

// Enable cors
server.use(cors());
server.options('*', cors()); // CORS pre-flight

// The router that contains all recipes routes
const recipeRouter = require('./router/v1/recipe')

// Init recipes router on Express
server.use('/api/v1', recipeRouter)


const PORT = 3000


const AppDataSource = require("./repository/dbSource.ts").AppDataSource

AppDataSource
    .initialize()
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server online at port "+PORT)
        })
    })

