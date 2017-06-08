'use strict'
const User = require('../../../../../model/User')

module.exports = async function addItemToCart (req, res) {
  // validate incoming data: debug + security!!
  try {
    await User.addProductToCart(req.params.username, req.body.productName, req.body.count)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
  res.status(200).send()
}
