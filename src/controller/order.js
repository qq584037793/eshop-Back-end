/**
 * @description order controller操作
 * @author GAO
 */

const Order = require('../models/Order');
const Address = require('../models/Address')
const Product = require('../models/Product')

/**
 * 
 * @param {String} username 
 * @param {Object} data 
 */
async function createOrder (username, data = {}) {
  const {
    addressId,
    shopId,
    shopName,
    isCanceled = false,
    products = []
  } = data

  //住所獲得by　addressId
  const address = await Address.findById(addressId);

  //商品リストの獲得
  const pIds = products.map(p => p.id)
  const productList = await Product.find(
    {
      shopId,
      _id: { $in: pIds }
    })

  //add注文個数
  const productListWithSales = productList.map(p => {
    //商品id
    const id = p._id.toString()

    const filterProducts = products.filter(item => item.id === id)
    if (filterProducts.length === 0) {
      throw new Error('データ見つかりません')
    }
    return {
      product: p,
      orderSales: filterProducts[0].num
    }
  })
  //注文の作成
  const newOrder = await Order.create({
    username,
    address,
    shopId,
    shopName,
    isCanceled,
    products: productListWithSales
  })
  return newOrder
}

async function getOrderList (username) {
  console.log('username', username)
  const list = await Order.find({ username }).sort({ _id: -1 })
  console.log('list', list)
  return list
}

module.exports = {
  createOrder,
  getOrderList
}