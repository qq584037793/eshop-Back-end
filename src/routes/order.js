/**
 * @description order router
 * @author GAO
 */

const router = require('koa-router')()
const { createOrder, getOrderList } = require('../controller/order')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/order')

//注文
router.post('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  const data = ctx.request.body

  try {
    const newOrder = await createOrder(username, data)
    ctx.body = new SuccessModel(newOrder)
  } catch (ex) {
    console.error(ex)
    ctx.body = new ErrorModel(10005, '注文失敗')
  }

})

//注文リスト
router.get('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  const list = await getOrderList(username)

  ctx.body = new SuccessModel(list)
})




module.exports = router