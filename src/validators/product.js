const Joi = require("joi")
const { category } = require("../config/prisma")

exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    stock: Joi.number().integer().required(),
    detail: Joi.string().optional(),
    length: Joi.number().integer().min(0).optional(),
    width: Joi.number().integer().min(0).optional(),
    height: Joi.number().integer().min(0).optional(),
    weight: Joi.number().integer().min(0).optional(),
    categoryId: Joi.number().integer().required(),
})

