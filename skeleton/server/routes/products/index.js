'use strict'
const get = require('./get/listAllProducts')
const comments = require('./comments')
module.exports = {
  get: get,
  comments: comments
}
