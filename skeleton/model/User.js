'use strict'
const mongoose = require('mongoose')
const connection = require('../connection/mongo')
const Schema = mongoose.Schema

const MODEL_NAME = 'User'

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  cart: [
    {
      productName: String,
      count: Number
    }
  ]
})

const User = mongoose.model(MODEL_NAME, userSchema)

/**
 *
 * @param {string} username
 * @returns {Query|Promise}
 */
User.getByUsername = function (username) {
  return User.findOne({ username: username })
}

/**
 *
 * @param {string} username
 * @param {string} productName
 * @param {number} count
 * @returns {Query|Promise}
 */
User.addProductToCart = function (username, productName, count) {
  return User.update({ username: username }, {
    $addToSet: {
      cart: {
        productName: productName,
        count: count
      }
    }
  })
}

/**
 *
 * @param {string} username
 * @param {string} productName
 * @param {number} count
 * @returns {Promise}
 */

User.changeCountOfProductInCart = function (username, productName, count) {
  return User.update({ username: username, 'cart.productName': productName }, {
    $set: {
      'cart.$.count': count
    }
  })
}

module.exports = User
