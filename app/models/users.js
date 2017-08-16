'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('users', new Schema({
  userId: String,
  username: String,
  fullName: String,
  lastDraftingTime: {type: Number, default: 0}
}));
