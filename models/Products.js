const sequelize=require('../database/sequelize.js');
const Sequelize = require('sequelize');


module.exports=sequelize.define('product',{
  UID:{
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey:true
  },

  name:{
    field:'name',
    type:Sequelize.STRING
  }
  ,

  description:{
    field:'description',
    type:Sequelize.STRING
  }
  ,

  available_sku:{
    field:'available_sku',
    type:Sequelize.STRING
  }
  ,

  cat_id_l1:{
    field:'cat_id_l1',
    type:Sequelize.STRING
  }
  ,

  cat_id_l2:{
    field:'cat_id_l2',
    type:Sequelize.STRING
  }
  ,

  cat_id_l3:{
    field:'cat_id_l3',
    type:Sequelize.STRING
  }
  ,

  reward_value:{
    field:'reward_value',
    type:Sequelize.STRING
  }
  ,

  supplier_id:{
    field:'supplier_id',
    type:Sequelize.STRING
  }
  ,

  deliver_cat_id:{
    field:'delivery_cat_id',
    type:Sequelize.STRING
  }
  ,

  UOM:{
    field:'UOM',
    type:Sequelize.STRING
  }
  ,

  uom_quantity:{
    field:'uom_quantity',
    type:Sequelize.STRING
  }
  ,

  CGST:{
    field:'CGST',
    type:Sequelize.STRING
  }
  ,

  IGST:{
    field:'IGST',
    type:Sequelize.STRING
  }
  ,

  SGST:{
    field:'SGST',
    type:Sequelize.STRING
  },

  max_purchase_unit:{
    field:'max_purchase_unit',
    type:Sequelize.STRING
  },

  status:{
    field:'status',
    type:Sequelize.STRING
  }

},


{
  timestamps:false
}
);