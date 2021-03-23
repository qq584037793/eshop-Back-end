# API 設計

## 登録

### url

url `/api/user/register`

### method

`post`

### request body

```js
{
  username:'tony',
  password:'123'
}
```

### response body

```js
{
  errno:0,
  message:`errno !==0,エラー`
}
```

---

## ログイン

### url

`api/user/login`

### method

`post`

### request body

```js
{
  username:'tony',
  password:'123'
}
```

### response body

```js
{
  errno:0,
  message:`errno !==0,エラー`
}
```

---

## ユーザ情報

### url

`api/user/info`

### method

`get`

### request body

null

### response body

```js
{
  errno:0,
  data:{
  username:'tony',
  }
  message:`errno !==0,エラー`
}
```

---

## 住所

### url

`api/user/address`

### method

`post`

### request body

```js
{
  city:'tokyo',
  department: 'xx区',
  houseNumber:'部屋号',
  name:'tony',
  phone:'07012341234',
}
```

### response body

```js
{
  errno:0,
  date:{
    _id:'住所id',
  },
  message: `errno !==0,エラー`
}
```

---

## 住所の獲得

### url

`api/user/address`

### method

`get`

### request body

null

### response body

```js
{
  errno: 0,
  date:[
    {
    _id:'住所id',
    city:'tokyo',
    department: 'xx区',
    houseNumber:'部屋号',
    name:'tony',
    phone:'07012341234'
    },
  ],
  message: `errno !==0,エラー`
}
```

---

## 住所の獲得(user)

### url

`api/user/address/:id`

### method

`get`

### request body

null

### response body

```js
{
  errno: 0,
  date:{
    _id:'住所id',
    city:'tokyo',
    department: 'xx区',
    houseNumber:'部屋号',
    name:'tony',
    phone:'07012341234'
    },
  message: `errno !==0,エラー`
}
```

---

## 住所の更新

### url

`api/user/address/:id`

### method

`path` (Restful API)

### request body

```js
{
    city:'tokyo',
    department: 'xx区',
    houseNumber:'部屋号',
    name:'tony',
    phone:'07012341234',
}
```

### response body

```js
{
  errno: 0,
  message: `errno !==0,エラー`
}
```

## 店舗

### url

`api/shop/hot-list`

### method

`get`

### request body¥

null

### response body

```js
{
  errno: 0,
  data:[
    {
      _id:'店舗id',
      name:'sam',
      imgUrl:'sam-img',
      sales:1200,
      expressLimit:0,
      expressPrice:5,
      slogan:'20%off'
    }
  ],
  message: `errno !==0,エラー`
}
```

## 店舗詳細

### url

`api/shop/:id`

### method

`get`

### request body

null

### response body

```js
{
  errno: 0,
  data:{
      _id:'店舗id',
      name:'sam',
      imgUrl:'sam-img',
      expressLimit:0,
      expressPrice:5,
      slogan:'20%off'
    }
  message: `errno !==0,エラー`
}
```

## 某店舗商品リスト

### url

`api/shop/:id/products`

### query

`tab=全部商品`

例　`api/shop/1/products?tab=全部商品`

### method

`get`

### request body

null

### response body

```js
{
  errno: 0,
  data:[
    {
      _id:'商品id',
      name:'トマト',
      imgUrl:'tomato-img',
      sales:10,
      price:33.5,
      olePrice:40
    },
  ],
  message: `errno !==0,エラー`
}
```

## 注文

### url

`api/order`

### method

`post`

### request body

```js
{
  addressId:'住所id',
  shopId:'店舗id',
  shopName:'',
  isCanceled:false,
  products:[
    {
      id:'商品id',
      num:4  //注文個数
    },
    {
      id:'商品id',
      num:5　//注文個数
    }
  ]

}
```

### response body

```js
{
  errno: 0,
  data:{
      _id:'注文id',
    },
  message: `errno !==0,エラー`
}
```
