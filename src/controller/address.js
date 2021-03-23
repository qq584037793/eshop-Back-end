/**
 * @description User controller操作
 * @author GAO
 */

const Address = require('../models/Address');
/**
 * 住所の作成
 * @param {String} username  //ユーザー名
 * @param {Object} data 　//住所のインフォメーション
 */
async function createAddress (username, data) {
  const address = await Address.create({
    username,
    ...data
  })
  return address
}

/**
 * 住所listの獲得
 * @param {String} username 
 */
async function getAddressList (username) {
  const list = await Address.find({ username }).sort({ updatedAt: -1 })
  return list
}
/**
 * 住所の獲得 according id
 * @param {String} id 
 */
async function getAddressById (id) {
  const address = await Address.findById(id)
  return address
}

/**
 * 住所の更新
 * @param {String} id 
 * @param {String} username 
 * @param {Object} data 
 */
async function updateAddress (id, username, data) {
  const address = await Address.findOneAndUpdate({ _id: id, username },
    { username, ...data },
    { new: true }
  )
  return address
}

module.exports = {
  createAddress, getAddressList, getAddressById, updateAddress
}