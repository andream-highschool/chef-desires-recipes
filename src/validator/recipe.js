const Joi = require('joi')


const list = {
    query: Joi.object().keys({
        
    }).default({
        limit: 20,
        page: 1
    }),
    body: Joi.object().keys({
        filters: Joi.object().keys({
            prompt: Joi.string(),
            tags: Joi.array().items(Joi.string())
        }).default({}),
        paging: Joi.object().keys({
            limit: Joi.number().integer().default(20),
            page: Joi.number().integer().default(1),
        }).default({
            limit: 20,
            page: 1
        })
    }),
}

const byId = {
    params: Joi.object().keys({
        id: Joi.number().integer().required().min(1),
    }),
}

const post = {
    body: Joi.object().keys({
        recipe: Joi.object().keys({
            nome: Joi.string(),
            ingredienti: Joi.array().items({
                id: Joi.number()
            }),
            tags: Joi.array().items({
                id: Joi.number()
            })
        })
    }).options({allowUnknown: true})
}

module.exports = {
    list, byId, post
}