'use strict'
var conn = new Mongo()
var db = conn.getDB("basics-skeleton")
var Products = db.getCollection('products')
var Users = db.getCollection('users')

Products.insertMany([
  {
    name: 'soap',
    price: 5
  },
  {
    name: 'phone',
    price: 100
  },
  {
    name: 'tv',
    price: 125
  },
  {
    name: 'vacuum',
    price: 111
  },
  {
    name: 'water',
    price: 1
  },
  {
    name: 'house',
    price: 2300
  },
  {
    name: 'chair',
    price: 12
  },
  {
    name: 'window',
    price: 23
  },
  {
    name: 'coffee',
    price: 8
  }
])
Users.insertMany([
  { username: 'john' },
  { username: 'mary' },
  { username: 'cho' }
])

