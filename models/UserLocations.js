const sequelize = require("../database/sequelize.js");
const Sequelize = require("sequelize");

module.exports = sequelize.define("Location", {
  UID: {
    field: "id",
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  user_id: {
    field: "user_id",
    type: Sequelize.STRING
  },

  add_l1: {
    field: "add_l1",
    type: Sequelize.STRING
  },

  add_l2: {
    field: "add_l2",
    type: Sequelize.STRING
  },
  add_l3: {
    field: "add_l3",
    type: Sequelize.STRING
  },
  pincode: {
    field: "pincode",
    type: Sequelize.STRING
  },
  gps_value: {
    field: "gps_value",
    type: Sequelize.STRING
  },
  delivery_contact  :{
    field:"delivery_contact",
    type: Sequelize.STRING
  },
  createdAt  :{
    field:"createdAt",
    type: Sequelize.STRING
  },
  status  :{
    field:"status",
    type: Sequelize.INTEGER
  },
 xc_01:{
     field:'xc_01',
    type:Sequelize.STRING
},
 xc_02:{
     field:'xc_02',
    type:Sequelize.STRING
},
 xc_03:{
     field:'xc_03',
    type:Sequelize.STRING
},
 xc_04:{
     field:'xc_04',
    type:Sequelize.STRING
},
 xc_05:{
     field:'xc_05',
    type:Sequelize.STRING
},
 xc_06:{
     field:'xc_06',
    type:Sequelize.STRING
},
 xc_07:{
     field:'xc_07',
    type:Sequelize.STRING
},
 xc_08:{
     field:'xc_08',
    type:Sequelize.STRING
},
 xc_09:{
     field:'xc_09',
    type:Sequelize.STRING
},
 xc_10:{
     field:'xc_10',
    type:Sequelize.STRING
}
});
