const express= require('express');
const router = express.Router();
const userModules = require("../../module/userModule");

const UserData=require('../userCollection/userCollection');
router.get('/', function(req, res){
      res.send('run the server')
});
router.post('/api/users',UserData.storeUserData )
router.post('/api/login',UserData.login);
router.get('/api/user/:userId',UserData.userId);
router.put('/api/user/:userId',UserData.updateUser);
router.delete('/api/user/:userId',UserData.deleteUser);
router.get('/user',async (req, res)=>{
      const data=await userModules.find();
      res.send(data);
})
module.exports=router;