# データの設計

例

## ユーザー

```js
{
  _id:'xx',
  username:'kou＠gmail.com', //唯一
  password: '1234'
}
```

## 住所

```js
{
  _id:'xx',
  username:'kou＠gmail.com',
  city:'tokyo',
  department: 'xx区',
  houseNumber:'部屋号',
  name:'tom',
  phone:'07012341234',
}
```

## 店舗

```js
{
  _id:'xx123',
  name:'sam',
  imgUrl:'sam-img',
  sales:1200,
  expressLimit:0,
  expressPrice:5,
  slogan:'20%off'
}
```

## 商品

```js
{
  _id:'xx123',
  shopId:'xxx' //店舗id
  name:'トマト',
  imgUrl:'tomato-img',
  sales:10,
  price:33.5,
  olePrice:40,
  tabs: ['all', 'fruit']
}
```

##　注文

```js
{
  _id:'xxx',
  username:'zhangsan',
  shopId:'店舗id',
  shopName:'sam',
  isCanceled:false,
  //複製の関係
  address:{　　　　　　　　
    "username": "zhangsan",
    "city": "tokyo",
    "department": "yy区",
    "houseNumber": "部屋号401",
    "name": "zhangSan",
    "phone": "07012341234",
  }
  //複製の関係
  products:[
    {
    product:{
      "tabs": ["all", "fruit"],
      "shopId": "604b6ddba18db76352a8b9e1",
      "name": "葡萄",
      "imgUrl": "/images/product/grape.jpg",
      "sales": 60,
      "price": 200,
      "olePrice": 250,
    },
    orderSales:3
  },
  {

  }
  ]
}
```
