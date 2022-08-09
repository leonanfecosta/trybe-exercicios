const Joi = require('joi');

const validateBody = (location) => {
  const locationSchema = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required(),
  });

  const { error, value } = locationSchema.validate(location);

  if (error) {
    throw new Error(error.message);
  };

  return value;
}

module.exports = validateBody;