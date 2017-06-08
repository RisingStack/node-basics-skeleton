'use strict'
const User = require('../../../../../../model/User')

module.exports = async function (req, res) {
  // validate incoming data: debug + security!!
  await User.changeCountOfProductInCart(req.params.username, req.params.productName, req.params.count)
  res.status(200).send()
}
