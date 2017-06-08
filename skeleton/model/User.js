'use strict'
require('../connection/mongo')
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const MODEL_NAME = 'user'

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }
})

const User = mongoose.model(MODEL_NAME, userSchema)

/**
 * Get all users from db
 * @returns {Query|Promise.<User[]>}
 */
User.getUsers = function () {
  return User.find()
}

/**
 *
 * @param {User} newUser
 * @returns {Query|Promise}
 */
User.register = function (newUser) {
  return new User(newUser).save()
}
module.exports = User
