const Joi = require('joi');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) => {
  Joi.object({
    username: Joi.string().alphanum().min(5).required().message({
      'string.min': 'Username must be at least 5 characters',
      'string.alphanum': 'Username must be alphanumeric',
      'string.required': 'Username is required',
    }),
    password: Joi.string().min(5).required().message({
      'string.min': 'Password must be at least 5 characters',
      'string.required': 'Password is required',
    }),
  }).validate(body);
};

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return next(error);

  if(req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.status = 401;
    return next(err);
  }

  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({token});
};
