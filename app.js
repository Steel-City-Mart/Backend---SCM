const sequelize = require("../database/sequelize.js");
const Sequelize = require("sequelize");

module.exports = sequelize.define("Category", {
  UID: {
    field: "id",
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  name: {
    field: "name",
    type: Sequelize.STRING
  },

  parent_cat_id: {
    field: "parent_cat_id",
    type: Sequelize.INTEGER
  },

  level: {
    field: "level",
    type: Sequelize.INTEGER
  },
  start_date: {
    field: "start_date",
    type: Sequelize.DATE
  },
  end_date: {
    field: "end_date",
    type: Sequelize.DATE
  },
  createdAt: {
    field: "createdAt",
    type: Sequelize.DATE
  },
  created_by  :{
    field:"created_by",
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
