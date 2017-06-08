'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config/server')
const Users = require('../model/User')

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

app.listen(config.port, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Sample app is listening at', config.port)
})
