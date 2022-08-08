const Joi = require('joi');

const validateId = (user) => {
  const userSchema = Joi.object({
    id: Joi.number().integer().required(),
  });

  const { error, value } = userSchema.validate(user);
  if (error) {
    throw new Error(error.message);
  }
  return value;
}

module.exports = validateId;