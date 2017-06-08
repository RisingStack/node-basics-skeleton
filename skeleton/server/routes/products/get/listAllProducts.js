'use strict'
const Product = require('../../../../model/Product')

module.exports = async function listAllProducts (req, res) {
  const products = await Product.getAll()
  res.send(JSON.stringify(products))
}
