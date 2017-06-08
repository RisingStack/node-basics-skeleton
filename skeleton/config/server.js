'use strict'
const joi = require('joi')

const schema = joi.object({
  PORT: joi.number().default(3000),
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  port: envVars.PORT,
}
