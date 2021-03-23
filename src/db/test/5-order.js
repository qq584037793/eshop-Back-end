/**
 * @description 注文 データ操作
 * @author GAO
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async () => {
  const requestBody = {
    addressId: '604b5e12cd7af75fe60b8c2a',
    shopId: '604b6d5b0465ba6277c1f795',
    shopName: 'wmt',
    isCanceled: false,
    products: [
      {
        id: '604b71918d4e7e668b29708b',
        num: 4  //注文個数
      },
      {
        id: '604b71918d4e7e668b29708c',
        num: 5　//注文個数
      }
    ]
  }
  //addressデータの獲得
  const address = await Address.findById(requestBody.addressId)
  //productListの獲得
  const pIds = requestBody.products.map(p => p.id) //['商品1のid','商品2のid']

  const productList = await Product.find({
    shopId: requestBody.shopId,
    _id: {
      $in: pIds
    }
  })
  // console.log(pIds);
  // console.log(productList);

  //orderSalesとの整合
  const productListWithSales = productList.map(p => {
    const id = p._id.toString()
    const filteredProducts = requestBody.products.filter(item => item.id === id)
    if (filteredProducts.length === 0) {
      throw Error(`データ見つかりません`)
    }
    return {
      product: p,
      orderSales: filteredProducts[0].num
    }
  })
  // console.log(productListWithSales);
  await Order.create({
    username: 'zhangsan',
    shopId: requestBody.shopId,
    shopName: requestBody.shopName,
    isCanceled: requestBody.isCanceled,
    address,
    products: productListWithSales
  })
})()