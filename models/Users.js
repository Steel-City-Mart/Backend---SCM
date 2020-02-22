const sequelize=require('../database/sequelize.js');
const Sequelize = require('sequelize');



module.exports=sequelize.define('user',{
  UID:{
    field:'id',
    type: Sequelize.INTEGER,
    primaryKey:true
  },

  username:{
    field:'username',
    type:Sequelize.STRING
  },
   created_on:{
    field:'created_on',
    type:Sequelize.STRING
  },
   created_by:{
    field:'created_by',
    type:Sequelize.DATE
  },
   updated_on:{
    field:'contact_number',
    type:Sequelize.STRING
  },
   email:{
    field:'email_id',
    type:Sequelize.STRING
  },
   contact_number:{
    field:'contact_number',
    type:Sequelize.STRING
  },
  membership:{
     field:'membership',
    type:Sequelize.STRING
  },
   role:{
     field:'role',
    type:Sequelize.STRING
  }
},


{
  timestamps:false
}
);