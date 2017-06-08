'use strict'
const config = require('../config').mongo
const mongoose = require('mongoose')

mongoose.connect(config.uri)
mongoose.Promise = global.Promise
