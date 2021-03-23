/**
 * @description User controller操作
 * @author GAO
 */

const User = require('../models/User');


/**
 * 登録
 * @param {String} username ユーザー名
 * @param {*} password パスワード
 */
async function register (username, password) {
  //データベースに保存
  const newUser = await User.create({ username, password })
  return newUser
}

/**
 * ログイン
 * @param {String} username ユーザー名
 * @param {*} password パスワード
 */
async function login (username, password) {
  const user = await User.findOne({ username, password })
  if (user != null) {
    return true //ログイン成功
  }
  return false　//失敗
}

async function getUser (username) {
  const user = await User.find({ username })
  return user
}

module.exports = {
  register, login, getUser
}