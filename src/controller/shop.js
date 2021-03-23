/**
 * @description shop controller操作
 * @author GAO
 */


const Shop = require('../models/Shop');
const Product = require('../models/Product');

/**
 * 店舗リストの獲得
 */
async function getShopList () {
  const list = await Shop.find().sort({ _id: -1 })
  return list
}

/**
 * 店舗詳細
 * @param {String} id 
 */
async function getShopInfo (id) {
  const shop = await Shop.findById(id)
  return shop
}

/**
 * 商品リストby shop 
 * @param {String} id
 * @param {String} tab 
 */
async function getProductByShopId (id, tab = '') {
  const list = await Product.find({
    shopId: id,
    tabs: {
      $in: tab
    }
  }).sort({ _id: -1 })
  return list
}

module.exports = {
  getShopList, getShopInfo, getProductByShopId
}