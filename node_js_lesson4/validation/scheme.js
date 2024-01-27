const Joi = require("joi");

const userIdScheme = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

const userDataScheme = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  age: Joi.number().integer().min(1).max(120).required(),
  city: Joi.string().max(30).required(),
});

module.exports = { userIdScheme, userDataScheme };