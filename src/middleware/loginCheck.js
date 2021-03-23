/**
 * @description loginCheck middleware
 * @author GAO
 */

const { ErrorModel } = require('../res-model/index')

module.exports = async (ctx, next) => {
  const session = ctx.session
  if (session && session.userInfo) {
    await next()
    return
  }
  ctx.body = new ErrorModel(10003, 'ログインチェック失敗')
}