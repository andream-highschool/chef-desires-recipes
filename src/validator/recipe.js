const Joi = require('joi')


const list = {
    query: Joi.object().keys({
        sortBy: Joi.string(),
        limit: Joi.number().integer().default(10),
        page: Joi.number().integer().default(1),
    }),
}

const byId = {
    params: Joi.object().keys({
        id: Joi.number().integer().required().min(1),
    }),
}

const post = {
    
}

module.exports = {
    list, byId, post
}