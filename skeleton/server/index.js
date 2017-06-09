'use strict'
module.exports = require('./server')

function getCounter() {
  let c = 0
  return function counter() {
    return c++
  }
}
