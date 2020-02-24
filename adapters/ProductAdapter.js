module.exports = function(request){
    adaptedObject = {
      name: request.body.productName,
      description: request.body.description,
      available_sku: request.body.sku,
      cat_id_l1: request.body.category1,
      cat_id_l2: request.body.category2,
      cat_id_l3: request.body.category3,
      reward_value: request.body.rewardValue,
      supplier_id: request.body.supplier,
      deliver_cat_id: request.body.deliveryCategory,
      UOM: request.body.unitMeasure,
      uom_quantity: request.body.unitQuantity,
      CGST: request.body.cgst,
      IGST: request.body.igst,
      SGST: request.body.sgst,
      max_purchase_unit: request.body.maxQuantity,
      status: "1", //TODO add logic for this somewhere through checkbox handling
      img_src: "123",
      start_date: request.body.start_date,//TODO handle conversions on server side
      end_date: request.body.end_date, //TODO handle conversions on server side
      created_by: 1, //TODO pick from user context
      xc_01: request.body.xc_01?request.body.xc_01:"-",
      xc_02: request.body.xc_02?request.body.xc_02:"-",
      xc_03: request.body.xc_03?request.body.xc_03:"-",
      xc_04: request.body.xc_04?request.body.xc_04:"-",
      xc_05: request.body.xc_05?request.body.xc_05:"-",
      xc_06: request.body.xc_06?request.body.xc_06:"-",
      xc_07: request.body.xc_07?request.body.xc_07:"-",
      xc_08: request.body.xc_08?request.body.xc_08:"-",
      xc_09: request.body.xc_09?request.body.xc_09:"-",
      xc_10: request.body.xc_10?request.body.xc_10:"-"
    };
    return 
};