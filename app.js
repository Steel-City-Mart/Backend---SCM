const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const users = require("./models/Users.js");

const products = require("./models/Products.js");

const productPricings = require("./models/ProductsPricing.js");

const userLocations=require("./models/UserLocations.js");

products.hasOne(productPricings, { foreignKey: "product_id" });

users.hasMany(userLocations,{foreignKey: "user_id"});

// productPricings.belongsTo(products, {foreignKey: 'product_id'});

app.post("/api/createProduct", (req, res) => {
  //console.log(req);
  const productPricing= req.body.productPricing;
  products
    .create(productAdapter(req))
    .then(product => {

    // console.log(product);

     console.log(productPricing.base_price);


    
      productPricings.create({
      product_id: product.UID,
      base_price: productPricing.base_price,
      sale_price: productPricing.sale_price,
      member_price: productPricing.member_price,
      start_date: productPricing.start_date,
      end_date:productPricing.end_date,
      created_by: productPricing.created_by,
      status: productPricing.status,
      description: productPricing.description,
      xc_01: productPricing.xc_01,
      xc_02: productPricing.xc_02,
      xc_03: productPricing.xc_03,
      xc_04: productPricing.xc_04,
      xc_05: productPricing.xc_05,
      xc_06: productPricing.xc_06,
      xc_07: productPricing.xc_07,
      xc_08: productPricing.xc_08,
      xc_09: productPricing.xc_09,
      xc_10: productPricing.xc_10


    }).then((productWithPrice)=>{

        let finalProductRes=product;

        finalProductRes.PriceInfo=productWithPrice;

        console.log(finalProductRes);

        res.json(finalProductRes);

    })
    });
});

app.post("/api/createUser", (req, res) => {
  console.log(res);
  users
    .create({
      username: req.body.username,
      created_by: req.body.created_by,
      email_id: req.body.email_id,
      contact_number: req.body.contact_number,
      membership: req.body.membership,
      role: req.body.role,
      passwd_hash: req.body.passwd_hash,
      xc_01: req.body.xc_01,
      xc_02: req.body.xc_02,
      xc_03: req.body.xc_03,
      xc_04: req.body.xc_04,
      xc_05: req.body.xc_05,
      xc_06: req.body.xc_06,
      xc_07: req.body.xc_07,
      xc_08: req.body.xc_08,
      xc_09: req.body.xc_09,
      xc_10: req.body.xc_10
    })
    .then(user => {
      res.json(user);
    })
});

app.get("/api/login", (req, res) => {
  let email_id = req.body.email_id;
  let passwordHash = req.body.passwd_hash;
  console.log(email_id);
  // users.findAll().then((users) =>{
  //   res.json(users);
  // })

  // res.json({
  //   "STATUS":"FAILED"
  // });

  users
    .findOne({
      where: {
        email_id: email_id
      }
    })
    .then(oUser => {
      if (oUser.passwd_hash == passwordHash) {
        res.json({
          loginAllowed: true
        });
      } else {
        res.json({
          loginAllowed: false
        });
      }
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/api/getProducts", (req, res) => {
  products
    .findAll({ include: [productPricings], required: true, raw: true })
    .then(products => {
      res.header('Access-Control-Expose-Headers', 'X-Total-Count');
      res.set("x-total-count", products.length);
      res.json(products);
    });
});

//test

// app.get("/api/getProductsPricing", (req,res) => {
//   productPricings.findAll().then((products) =>{
//     res.json(products);
//   })
// });

app.get("/api/getUsers", (req, res) => {
  users.findAll().then(users => {
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set("x-total-count", users.length);
    res.json(users);
  });
});

app.get('/api/getUserDetails/:id',(req,res)=>{

  let {id} =req.params;

  users.findByPk(id,{
   include: [userLocations], required: true, raw: true 

  }).then((user)=>{
    if(user){
      res.json(user);
    }
    else
    {
      res.status(404).send();
    }
  });
});



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  // err.status = 404;
  // res.redirect('/fail');
  // next(err);
  res.json({
    "Description":"API Not Found"
  });
});

app.listen(5000, console.log("Server is started"));
