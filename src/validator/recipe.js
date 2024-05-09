const Joi = require('joi')


// Esempio di oggetto accettato da questo validate
// {
//     query: {
//     sortBy: 'name',
//     limit: 20,
//     page: 3
//     }
// }

// Esempio di oggetto NON accettato da questo validate
// {
//     query: {
//     sortBy: 'name',
//     limit: '20',
//     page: true
//     }
// }

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

module.exports = {
    list, byId
}