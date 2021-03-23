/**
 * @description address router
 * @author GAO
 */
const router = require('koa-router')()
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')



router.prefix('/api/user/address')

//住所の作成
router.post('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body

  try {
    const newAddress = await createAddress(username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch (ex) {
    console.error(ex)
    ctx.body = new ErrorModel(10004, '住所作成失敗')
  }
})

//住所listの獲得
router.get('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const list = await getAddressList(username)
  ctx.body = new SuccessModel(list)
})

//住所の獲得 according id

router.get('/:id', loginCheck, async function (ctx, next) {
  const id = ctx.params.id
  const address = await getAddressById(id)
  ctx.body = new SuccessModel(address)
})

//住所の更新

router.patch('/:id', loginCheck, async function (ctx, next) {
  const id = ctx.params.id
  const data = ctx.request.body
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  const newAddress = await updateAddress(id, username, data)
  ctx.body = new SuccessModel(newAddress)
})




module.exports = router