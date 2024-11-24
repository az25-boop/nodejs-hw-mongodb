// src/validation/students.js

import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.number().required(),
  email: Joi.string().email().required(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(30)
    .valid('work', 'home', 'personal')
    .required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.number(),
  email: Joi.string().email(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().min(3).max(30).valid('work', 'home', 'personal'),
});
