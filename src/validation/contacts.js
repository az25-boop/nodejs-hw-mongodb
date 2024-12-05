// src/validation/students.js

import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  // age: Joi.number().integer().min(6).max(16).required(),
  // gender: Joi.string().valid('male', 'female', 'other').required(),
  // avgMark: Joi.number().min(2).max(12).required(),
  // onDuty: Joi.boolean(),
  // parentId: Joi.string().required(), // нова властивість
  phoneNumber: Joi.number().required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal'),
});
