const sequelize = require("../database/sequelize.js");
const Sequelize = require("sequelize");

module.exports = sequelize.define("user", {
  UID: {
    field: "id",
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  username: {
    field: "username",
    type: Sequelize.STRING
  },

  created_by: {
    field: "created_by",
    type: Sequelize.INTEGER
  },

  email_id: {
    field: "email_id",
    type: Sequelize.STRING
  },
  contact_number: {
    field: "contact_number",
    type: Sequelize.STRING
  },
  membership: {
    field: "membership",
    type: Sequelize.STRING
  },
  role: {
    field: "role",
    type: Sequelize.STRING
  },
  passwd_hash  :{
    field:"passwd_hash",
    type: Sequelize.STRING
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
