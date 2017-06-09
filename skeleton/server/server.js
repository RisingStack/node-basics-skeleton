'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config/server')
const Users = require('../model/User')
const Product = require('../model/Product')
const Comments = require('../model/Comments')

function stepIntoMe () {
  const a = 1+ 2
  console.log(a)
  return a
}

stepIntoMe()

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/users', async function getUsers (req, res) {
  const userModels = await Users.getUsers()
  const user = userModels.map(function (model) {
    return model.toObject()
  })
  let responseString

  try {
    responseString = JSON.stringify(user)
  } catch (err) {
    console.error()
  }

  res.send(responseString)
})

app.post('/users', async function (req, res) {
  try {
    await Users.register(req.body)
  } catch (err) {
    return res.status(403).send('User already registered')
  }
  res.status(201).send('Success!')
})

app.get('/products/:productId', async function (req, res) {
  const id = parseInt(req.params.productId)
  const productModel = await Product.getById(id)
  const comments = await Comments.getComments(id)
  const product = productModel.toObject()
  const responseObject = Object.assign({}, product, { comments })
  res.send(responseObject)
})

app.listen(config.port, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Sample app is listening at', config.port)
})

module.exports = app
