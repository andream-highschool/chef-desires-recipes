const express = require('express')
const router = express.Router()
const httpStatus = require('http-status') 

const validate = require('../../middleware/validator')
const recipeValidator = require('../../validator/recipe')
const recipeController = require('../../controller/recipe')

// Example of middleware
// Gli "use" sono i middleware che hanno la precedenza, vengono fatti su tutti. 
router.use((req, res, next) => {
    console.log(`Route called: ${req.method} - ${req.originalUrl}`)
    console.log(req)
    next()
})

// Quando con express facciamo poi una richiesta, in questo caso "get", 
router.get('/recipes', validate(recipeValidator.list), recipeController.list)

// Get one recipe by ID
// ":id" rappresenta un "parametro" dell'indirizzo, lo troviamo in req.params
router.get('/recipes/:id', validate(recipeValidator.byId), recipeController.ingredientId)

router.post('/recipes', validate(recipeValidator.post), recipeController.post)

module.exports = router