const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']); // Gli dico di prendere solo questi parametri 
                                                                   // (quelli che trova) dallo schema JOI che 
                                                                   // abbiamo in ..\validator\recipe.js
    
    let chiavi = Object.keys(validSchema)
    const object = pick(req, chiavi); // Ora prendo dalla richiesta solo i parametri trovati nello schema JOI 
    
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        console.log(pick(value.query, chiavi))
        const errorMessage = error.details.map((details) => details.message).join(', ');
        // return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
        return res.status(httpStatus.BAD_REQUEST).json({error: errorMessage})
    }

                                                                                                                                                // Lo commento perché sembra non fare nulla, req rimane sempre quello quindi ho aggiunto 
                                                                                                                                                // "const query = req.query" in "..\controller\recipe.js"
    Object.assign(req, value)
    
    return next();
};

module.exports = validate;