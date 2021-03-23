/**
 * @description shop router
 * @author GAO
 */

const router = require('koa-router')()
const { getShopList, getShopInfo, getProductByShopId } = require('../controller/shop')
const { SuccessModel, ErrorModel } = require('../res-model/index')


router.prefix('/api/shop')

//店舗リスト
router.get('/hot-list', async function (ctx, next) {
  const list = await getShopList()
  ctx.body = new SuccessModel(list)
})

//店舗詳細

router.get('/:id', async function (ctx, next) {
  const id = ctx.params.id
  const shop = await getShopInfo(id)
  ctx.body = new SuccessModel(shop)
})

//某店舗商品リスト
router.get('/:id/products', async function (ctx, next) {
  const shopId = ctx.params.id
  const tab = ctx.query.tab || 'all'
  const products = await getProductByShopId(shopId, tab)
  ctx.body = new SuccessModel(products)
})




module.exports = router