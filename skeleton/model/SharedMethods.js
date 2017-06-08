'use strict'
const _ = require('lodash')
const Product = require('./Product')
const User = require('./User')
const SharedMethods = {}

/**
 *
 * @param {string} username
 * @returns {Promise.<number>}
 */
SharedMethods.getSumOfCart = async function (username) {
  const user = await User.findOne({ username: username })
  let productNamesInCart
  if (user && user.cart) {
    productNamesInCart = user.cart.map(function (item) {
      return item.productName
    })
  } else {
    return 0
  }

  const products = await Product.getById(productNamesInCart)

  return SharedMethods._getTotalCost(products, user.cart)
}

/**
 *
 * @param {Product[]} allProducts
 * @param {User.cart} itemsInCart
 * @returns number
 * @private
 */
SharedMethods._getTotalCost = function (allProducts, itemsInCart) {
  return allProducts.reduce(function (cost, product) {
    const itemInCart = _.find(itemsInCart, [ 'productName', product.name ])
    if (!itemInCart) {
      return cost
    }
    return cost + product.price * itemInCart.count
  }, 0)
}

module.exports = SharedMethods
