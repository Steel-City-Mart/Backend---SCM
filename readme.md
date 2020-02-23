# List of API's



### getProducts
Added an API to fetch the list of all the Products and fetch corresponding pricing information.

   

    /api/getProducts

### getUsers
Added an API to fetch the list of all the Users information.

    /api/getUsers

### getLogin
Added an API to fetch whether the user exists in database or not.

    /api/login


### createProduct
Added an API to create a product based on json payload.

    /api/createProduct

### createUser
Added an API to create an user based on json payload.

    /api/createUser


```mermaid
graph LR

Products --> D(Products_Pricings)


```
