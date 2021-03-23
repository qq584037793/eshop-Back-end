/**
 * @description Address Model
 * @author GAO
 */


const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true, //必須
  },
  city: String,
  department: String,
  houseNumber: String,
  name: String,
  phone: String
}, { timestamps: true })


const Address = mongoose.model('address', Schema)

module.exports = Address