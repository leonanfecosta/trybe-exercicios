const Joi = require('joi');

const validateBody = (user) => {
  const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { error, value } = userSchema.validate(user);
  if (error) {
    throw new Error(error.message);
  }
  return value;
};

module.exports = validateBody;