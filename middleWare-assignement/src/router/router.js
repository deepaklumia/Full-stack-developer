const { response } = require('express');
const express = require('express');
const router = express.Router();
const storeUser=require('../storeData/storeUserData');
const storeProduct=require('../storeData/storeProductData');
const storeOrder=require('../storeData/storeOrderData');
const middleWare= require('../middleWare/MiddleWareUserOrder')
const productModules = require('../module/productModule');
const userModules = require('../module/userModule');
const orderModule = require('../module/orderModule');
router.get('/', function(req, res){
      res.send("server is running on port 3000");
});
router.post('/create-user',middleWare.orderMiddleWare,storeUser.storeUserData);
router.post('/create-product',storeProduct.storeProductData);
router.post('/create-order',middleWare.orderMiddleWare,storeOrder.storeOrderData);
router.get('/get-product',async (req,res) =>{
  const product = await productModules.find();
  res.send(product);

});
router.get('/get-user',async (req,res) =>{
      const user = await userModules.find();
      console.log(user);
      res.send(user);
});
router.get('/get-order',async (req,res) =>{
      const order= await orderModule.find();
      console.log(order);
      res.send(order);
})
module.exports=router;