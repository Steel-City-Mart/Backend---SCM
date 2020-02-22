const Sequelize = require('sequelize');
const express = require('express');
const exphbs=require('express-handlebars');
const bodyParser= require('body-parser');
const path =require('path');

// Option 1: Passing parameters separately
module.exports = new Sequelize('my_mart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// db.authenticate()
// .then(()=>console.log('Database Connected')).
// catch(err=> console.log(err));