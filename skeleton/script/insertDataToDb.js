'use strict'
var conn = new Mongo()
var db = conn.getDB("basics-skeleton")
var Products = db.getCollection('products')
var Users = db.getCollection('users')
Users.drop()
Products.drop()
Products.insertMany([
  {
    _id: 1,
    name: 'soap',
    price: 5
  },
  {
    _id: 2,
    name: 'phone',
    price: 100
  },
  {
    _id: 3,
    name: 'tv',
    price: 125
  },
  {
    _id: 4,
    name: 'vacuum',
    price: 111
  },
  {
    _id: 5,
    name: 'water',
    price: 1
  },
  {
    _id: 6,
    name: 'house',
    price: 2300
  },
  {
    _id: 7,
    name: 'chair',
    price: 12
  },
  {
    _id: 8,
    name: 'window',
    price: 23
  },
  {
    _id: 9,
    name: 'coffee',
    price: 8
  }
])
Users.insertMany([
  { username: 'john' },
  { username: 'mary' },
  { username: 'cho' }
])

