'use strict'
const fs = require('fs')
const countLines = require('../../util/countLines')

module.exports = function readFilePromise (path, options) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, options, function (err, content) {
      if (err) {
        return reject(err)
      }
      resolve(content)
    })
  })
}

