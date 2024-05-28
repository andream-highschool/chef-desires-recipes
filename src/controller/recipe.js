const httpStatus = require("http-status");
const recipeRepository = require('../repository/recipe')

const list = (req, res) => {
    const query = req.query
    recipeRepository.list(query.limit, query.page)
    .then((recipes) => {
        res.status(httpStatus.OK).json({data: recipes})
    })
}

const ingredientId = (req,res) => {
    const id = req.params.id
    recipeRepository.id(id)
    .then((ingredient) => {
        res.status(httpStatus.OK).json({data: ingredient})
    })
}

const post = (req, res) => {

    recipeRepository.post(req)
    .then(() => {
        res.status(httpStatus.CREATED)
        res.end()
    })
}


module.exports = {
    list, ingredientId, post
}
