const { response } = require('movement');
const productModules = require('../module/productModule');
const storeProductData= async function(req,res){
      const product= req.body;
      const data= await productModules.create(product);
      console.log(product);
      res.send({status:true,msg:data});
}
module.exports.storeProductData=storeProductData;