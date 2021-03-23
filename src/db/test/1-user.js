/**
 * @description User データ操作
 * @author GAO
 */

const User = require('../../models/User')

!(async () => {

  // create
  // await User.create({
  //   username: 'zhangsan',
  //   password: '123'
  // })
  // await User.create({
  //   username: 'mimi@gamil.com',
  //   password: '1234qwe'
  // })

  // Read
  const zhangsan = await User.findOne({
    username: 'zhangsan',
    password: '123'
  })
  console.log('zhangsan', zhangsan);

})()