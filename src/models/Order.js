/**
 * @description Order Model
 * @author GAO
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: String,
  shopId: String,
  shopName: String,
  isCanceled: {
    type: Boolean,
    default: false
  },
  address: {
    username: {
      type: String,
      required: true
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String
  },
  products: [
    {
      product: {
        shopId: {
          type: String,
          require: true
        },
        name: String,
        imgUrl: String,
        sales: Number,
        price: Number,
        olePrice: Number,
      }, orderSales: Number
    }
  ]
}, { timestamps: true })

const Order = mongoose.model('order', Schema)

module.exports = Order