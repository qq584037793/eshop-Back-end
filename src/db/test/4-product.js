/**
 * @description 商品 データ操作
 * @author GAO
 */


const Product = require('../../models/Product')


!(async () => {
  // Create
  // await Product.create({
  //   shopId: '604b6ddba18db76352a8b9e1',//sam
  //   name: '葡萄',
  //   imgUrl: '/images/product/grape.jpg',
  //   sales: 60,
  //   price: 200,
  //   olePrice: 250,
  //   tabs: ['all', 'fruit']
  // })
  // await Product.create({
  //   shopId: '604b6ddba18db76352a8b9e1', //sam
  //   name: '林檎',
  //   imgUrl: '/images/product/apple.jpg',
  //   sales: 90,
  //   price: 198,
  //   olePrice: 230,
  //   tabs: ['all', 'fruit']
  // })
  // await Product.create({
  //   shopId: '604b6d5b0465ba6277c1f795',//wmt
  //   name: '桃',
  //   imgUrl: '/images/product/peach.jpg',
  //   sales: 100,
  //   price: 98,
  //   olePrice: 120,
  //   tabs: ['all', 'fruit']
  // })
  // await Product.create({
  //   shopId: '604b6d5b0465ba6277c1f795',//wmt
  //   name: '西瓜',
  //   imgUrl: '/images/product/watermelon.jpg',
  //   sales: 30,
  //   price: 298,
  //   olePrice: 360,
  //   tabs: ['all', 'fruit']
  // })
  // await Product.create({
  //   shopId: '604b6ddba18db76352a8b9e1',//sam
  //   name: '豚肉',
  //   imgUrl: '/images/product/pork.jpeg',
  //   sales: 20,
  //   price: 399,
  //   olePrice: 490,
  //   tabs: ['all', 'meat']
  // })
  // await Product.create({
  //   shopId: '604b6ddba18db76352a8b9e1',//sam
  //   name: '鶏肉',
  //   imgUrl: '/images/product/chicken.jpeg',
  //   sales: 30,
  //   price: 299,
  //   olePrice: 50,
  //   tabs: ['all', 'meat']
  // })
  // await Product.create({
  //   shopId: '604b6d5b0465ba6277c1f795',//wmt
  //   name: '牛肉',
  //   imgUrl: '/images/product/pork.jpeg',
  //   sales: 20,
  //   price: 399,
  //   olePrice: 50,
  //   tabs: ['all', 'meat']
  // })
  // await Product.create({
  //   shopId: '604b6d5b0465ba6277c1f795',//wmt
  //   name: '魚肉',
  //   imgUrl: '/images/product/fish.jpeg',
  //   sales: 20,
  //   price: 399,
  //   olePrice: 50,
  //   tabs: ['all', 'meat']
  // })
  // Find
  const list = await Product.find({
    shopId: '604b6d5b0465ba6277c1f795',
    tabs: {
      $in: 'all'
    }
  }).sort({ _id: -1 })
  console.log(list);

})()

