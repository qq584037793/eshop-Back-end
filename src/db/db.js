/**
 * @description mongoose db接続
 * @author GAO
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'testdb' //データベース名

//構成
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

//接続開始
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//接続対象
const db = mongoose.connection

db.on('error', err => {
  console.log('mongodb connect error', err)
})
//test
// db.once('open', () => {
//   console.log('mongodb 接続成功')
// })

module.exports = mongoose