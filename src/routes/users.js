const router = require('koa-router')()
const { register, login, getUser } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')


router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

//登録
router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body

  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  }
  catch (ex) {
    console.error(ex)
    ctx.body = new ErrorModel(10001, `登録失敗-${ex.message}`)
  }
})

//ログイン
router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if (res) {
    ctx.session.userInfo = { username } //session設置

    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel(10002, `ログイン失敗`)
  }
})

router.get('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const user = await getUser(username)
  ctx.body = new SuccessModel(user)
})


module.exports = router
