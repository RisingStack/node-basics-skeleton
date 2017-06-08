'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const config = require('../config/server')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())

app.get('/', routes.root.get)
app.get('/products', routes.products.get)
app.get('/user/:username/cart', routes.user.cart.get)
app.put('/user/:username/cart', routes.user.cart.put)
app.put('/user/:username/cart/:productName/count/:count', routes.user.cart.count.put)

app.listen(config.port, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('App is listening on', config.port)
})
