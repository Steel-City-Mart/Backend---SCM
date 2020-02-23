const express = require('express');
const exphbs=require('express-handlebars');
const bodyParser= require('body-parser');
const path =require('path');


const app= express();

app.use(bodyParser.json());


const users=require('./models/Users.js');

const products=require('./models/Products.js');

const productPricings=require('./models/ProductsPricing.js');

products.hasOne(productPricings, {foreignKey: 'product_id'})

// productPricings.belongsTo(products, {foreignKey: 'product_id'});


app.post("/api/createProduct",(req,res)=>{

  console.log(res);
  products.create({
    name:req.body.name,
    description:req.body.description,
    available_sku:req.body.available_sku,
    cat_id_l1:req.body.cat_id_l1,
    cat_id_l2:req.body.cat_id_l2,
    cat_id_l3:req.body.cat_id_l3,
    reward_value:req.body.reward_value,
    supplier_id:req.body.supplier_id,
    deliver_cat_id:req.body.deliver_cat_id,
    UOM:req.body.UOM,
    uom_quantity:req.body.uom_quantity,
    CGST:req.body.CGST,
    IGST:req.body.IGST,
    SGST:req.body.SGST,
    max_purchase_unit:req.body.max_purchase_unit,
    status:req.body.status,
    img_src:"123",
    start_date:req.body.start_date,
    end_date:req.body.end_date,
    created_by:1,
    xc_01:req.body.xc_01,
    xc_02:req.body.xc_02,
    xc_03:req.body.xc_03,
    xc_04:req.body.xc_04,
    xc_05:req.body.xc_05,
    xc_06:req.body.xc_06,
    xc_07:req.body.xc_07,
    xc_08:req.body.xc_08,
    xc_09:req.body.xc_09,
    xc_10:req.body.xc_10

  }).then((product)=>{
    res.json(product);
  })
});


app.post("/api/createUser",(req,res)=>{

  console.log(res);
  users.create({
    username:req.body.username,
    created_by:req.body.created_by,
    email_id:req.body.email_id,
    contact_number:req.body.contact_number,
    membership:req.body.membership,
    role:req.body.role,
    passwd_hash:req.body.passwd_hash,
    xc_01:req.body.xc_01,
    xc_02:req.body.xc_02,
    xc_03:req.body.xc_03,
    xc_04:req.body.xc_04,
    xc_05:req.body.xc_05,
    xc_06:req.body.xc_06,
    xc_07:req.body.xc_07,
    xc_08:req.body.xc_08,
    xc_09:req.body.xc_09,
    xc_10:req.body.xc_10

  }).then((user)=>{
    res.json(user);
  })
});

app.get("/api/getProducts", (req,res) => {
  products.findAll({include:[productPricings], required: true,  raw: true}).then((products) =>{
    res.json(products);
  })
});


// app.get("/api/getProductsPricing", (req,res) => {
//   productPricings.findAll().then((products) =>{
//     res.json(products);
//   })
// });

app.get("/api/getUsers", (req,res) => {
  users.findAll().then((users) =>{
    res.json(users);
  })
});


app.listen(5000,console.log("Server is started"));
