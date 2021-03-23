const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors') //クロスドメイン

const index = require('./routes/index')
const users = require('./routes/users')
const addressRoute = require('./routes/address')
const shopRoute = require('./routes/shop')
const orderRoute = require('./routes/order')

// error handler
onerror(app)


//cors 構成
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

// session 構成
app.keys = ['secret$key']　//secret key
app.use(session({
  // cookie構成
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000  //24h
  }

}))


// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRoute.routes(), addressRoute.allowedMethods())
app.use(shopRoute.routes(), shopRoute.allowedMethods())
app.use(orderRoute.routes(), orderRoute.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
