const express = require('express');
const exphbs=require('express-handlebars');
const bodyParser= require('body-parser');
const path =require('path');


const users=require('./models/Users.js');

const products=require('./models/Products.js');











const app= express();

app.get("/api/getProducts", (req,res) => {
  products.findAll().then((products) =>{
    res.json(products);
  })
});


app.get("/api/getCustomers", (req,res) => {
  users.findAll().then((users) =>{
    res.json(users);
  })
});


app.listen(5000,console.log("Server is started"));