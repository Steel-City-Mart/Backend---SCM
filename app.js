const express = require('express');
const exphbs=require('express-handlebars');
const bodyParser= require('body-parser');
const path =require('path');


const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('my_mart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db.authenticate()
.then(()=>console.log('Database Connected')).
catch(err=> console.log(err));

const products=db.define('product',{
  UID:{
    field:'UID',
    type: Sequelize.INTEGER,
    primaryKey:true
  },

  name:{
    field:'name',
    type:Sequelize.STRING
  }
},


{
  timestamps:false
}
);

const app= express();

app.get("/api/getProducts", (req,res) => {
  products.findAll().then((products) =>{
    res.json(products);
  })
});

app.listen(5000,console.log("Server is started"));