'use strict'
const mongoose = require('mongoose')
const connection = require('../connection/mongo')
const Schema = mongoose.Schema

const MODEL_NAME = 'Product'

const productSchema = new Schema({
  name: String,
  price: Number
})

const Product = mongoose.model(MODEL_NAME, productSchema)

/**
 *
 * @param {string[]} productNames
 * @returns {Query|Promise}
 */
Product.getById = function (productNames) {
  return Product.find({
    name: {
      $in: productNames
    }
  })
}

/**
 *
 * @returns {Query|Promise}
 */
Product.getAll = function () {
  return Product.find()
}

module.exports = Product

