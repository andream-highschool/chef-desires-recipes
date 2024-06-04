const httpStatus = require("http-status");
const recipeRepository = require('../repository/recipe')

const list = (req, res) => {
    req = req.validatedResult;
    
    recipeRepository.list(req)
    .then((recipes) => {
        res.status(httpStatus.OK).json({data: recipes})
    })
}

const ingredientId = (req,res) => {
    req = req.validatedResult;

    const id = req.params.id
    recipeRepository.id(id)
    .then((ingredient) => {
        res.status(httpStatus.OK).json({data: ingredient})
    })
}

const post = (req, res) => {
    req = req.validatedResult;
    req = req.body  

    ricetta = req.recipe
    recipeRepository.post(ricetta)
    .then((result) => {
        res.status(httpStatus.CREATED).json(result)
        res.end()
    })
}


module.exports = {
    list, ingredientId, post
}
