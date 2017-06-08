'use strict'
const httpRequest = require('request-promise-native')

async function getComments (req, res) {
  const postId = req.params.product
  const apiResponse = await httpRequest.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  res.send(apiResponse)
}
module.exports = getComments
