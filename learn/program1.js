'use strict'
const args = process.argv.slice(2)

const result = args.reduce(function (sum, arg) {
  return sum + parseInt(arg)
}, 0)

console.log(result)
