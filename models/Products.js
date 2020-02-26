const sequelize=require('../database/sequelize.js');
const Sequelize = require('sequelize');



module.exports=sequelize.define('Product',{
  UID:{
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },

  name:{
    field:'name',
    type:Sequelize.STRING
  }
  ,

  created_by:{
    field:'created_by',
    type: Sequelize.INTEGER
  },

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
  },
  img_src:{
     field:'img_src',
    type:Sequelize.STRING
},
start_date:{
  field:'start_date',
  
    type:Sequelize.DATE

},
end_date:{
  field:'end_date',
    
    type:Sequelize.DATE
  
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



}



);
