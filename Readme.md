# API documentation

## Register new user

### ASK required

**Endpoint POST**

http://localhost:8080/api/auth/register

**JSON body**

{

"username":"user7",
"email":"username123@gmail.com",
"password":"12345"

}

## Login user

### ASK required

**Endpoint POST**

http://localhost:8080/api/auth/login

**JSON body**

{

"username":"jaismin",

"password":"12345"

}

http://localhost:5000/

## Update user

### ASK required

**Endpoint PUT**

http://localhost:8080/api/users/:id

**JSON body**

{

"username":"user7",
"email":"username123@gmail.com",
"password":"12345"

}

## Delete user

### ASK required

**Endpoint DELETE**
**jwt token for user**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTQ2NCwiZXhwIjoxNjY0MTY4NjY0fQ.gX1aSilI3WSAon1NeI8yeGVmSH1aN9AjOtX3e2_ty68

http://localhost:8080/api/users/delete/:id

## Get user by id

### ASK required

**Endpoint GET**
**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/users/find/:id

## Get all users

### ASK required

**Endpoint GET**
**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/users/getAllUser

## Upload products

### ASK required

**Endpoint PUT**
**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/products/uploadProduct

**JSON body**

{

"title":"phoneRealme",
"desc":"this is phone",
"categories":[
"phone"
],

    "price":9900

}

## Update products

### ASK required

**Endpoint PUT**
**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/products/updateProduct/:id

**JSON body**

{

"title":"phoneRealme",
"desc":"this is phone",
"categories":[
"phone"
],

    "price":9900

}

## Delete products by id

### ASK required

**Endpoint - DELETE**

**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/products/:id

## GET products by id

### ASK required

**Endpoint - GET**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/products/find/:id

## GET all products

### ASK required

**Endpoint - GET**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/products

## Place order

### ASK required

**Endpoint - POST**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/orders/placeOrder

**JSON body**

{

"userId":"632b1f483401d19b95b849a6",
"products":[
{
"productId":"632b30ad6a50d593aca8523f"
},
{
"quantity":"3"
}
],
"address":"baker streat",
"amount":"2000"

}

## Update order

### ASK required

**Endpoint - PUT**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/orders/updateOrder/:id

**JSON body**

{

"userId":"632b1f483401d19b95b849a6",
"products":[
{
"productId":"632b30ad6a50d593aca8523f"
},
{
"quantity":"3"
}
],
"address":"baker streat",
"amount":"2000"

}

## Cancel order

### ASK required

**Endpoint - DELETE**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/orders/deleteOrder/:id

## Create an api to list ordered products based on the customer

### ASK required

**Endpoint - GET**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

http://localhost:8080/api/orders/findOrderedProducts/:id

**JSON body**

{

"search_query":"cha"

}

## Create an api to list products based on the date

### ASK required

**Endpoint - GET**

**jwt token for admin/any token**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

//632b1f483401d19b95b849a6

http://localhost:8080/api/orders/findOrder/:userId

**JSON body**

{

    "Orderdate":"2022,09,22"

}

## Create an api to list users based on the product purchased

### ASK required

**Endpoint - GET**

**jwt token for admin**

token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmIxZjQ4MzQwMWQxOWI5NWI4NDlhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwOTU5MiwiZXhwIjoxNjY0MTY4NzkyfQ.TLvlVh-70AzF5fBX2g4siv1xqqae_wtOZt2XMXlH8x0

//632b1f483401d19b95b849a6

http://localhost:8080/api/orders/getCustomer

**JSON body**

{

"status":"sucsess"

}
