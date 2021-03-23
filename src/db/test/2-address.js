/**
 * @description 住所 データ操作
 * @author GAO
 */

const Address = require('../../models/Address')


!(async () => {
  // await Address.create({
  //   username: 'zhangsan', //ユーザー関連
  //   city: 'tokyo',
  //   department: 'xx区',
  //   houseNumber: '部屋号',
  //   name: 'zhangSan',
  //   phone: '07012341234',
  // })
  // await Address.create({
  //   username: 'zhangsan', //ユーザー関連
  //   city: 'tokyo',
  //   department: 'yy区',
  //   houseNumber: '部屋号',
  //   name: 'zhangSan',
  //   phone: '07012341234',
  // })

  // Read(username)
  // const addressList = await Address.find({
  //   username: 'zhangsan'
  // }).sort({ updatedAt: -1 })
  // console.log(addressList);

  // Read(id)
  // const id = '604b5e12cd7af75fe60b8c2a'
  // const address = await Address.findById(id)
  // console.log(address);

  // Update
  const id = '604b5e12cd7af75fe60b8c2a'
  const newData = {
    username: 'zhangsan',
    city: 'tokyo',
    department: 'yy区',
    houseNumber: '部屋号401',
    name: 'zhangSan',
    phone: '07012341234',
  }
  const address = await Address.findByIdAndUpdate(
    {
      _id: id,
      username: 'zhangsan'
    },
    newData,
    {
      new: true
    }
  )
  console.log(address);
})()