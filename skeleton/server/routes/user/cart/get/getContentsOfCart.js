'use strict'
const Model = require('../../../../../model')

module.exports = async function getContentsOfCart (req, res) {
  // validate incoming data: debug + security!!
  const sum = await Model.SharedMethods.getSumOfCart(req.params.username)
  const user = await Model.User.getByUsername(req.params.username)
  const itemsInCart = user && user.cart ? user.cart.map(function (item) {
    return item.toObject()
  }) : []
  res.send(JSON.stringify({
    sum: sum,
    itemsInCart: itemsInCart
  }))
}
