/**
 * @description User Model
 * @author GAO
 */


const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true, //必須
    unique: true,　//唯一
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true })


const User = mongoose.model('user', Schema)

module.exports = User