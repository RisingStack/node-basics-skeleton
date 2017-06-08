'use strict'
const joi = require('joi')

const schema = joi.object({
  MONGO_URI: joi.string().default('mongodb://localhost/basics-skeleton'),
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  uri: envVars.MONGO_URI,
}
