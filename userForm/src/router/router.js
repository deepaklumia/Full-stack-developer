const { response, request } = require('express');
const express = require('express');
const { default: Script } = require('next/script');
const router = express.Router();
const validator = require('validator');
const userModule = require('../module/userModule');

router.get('/', function(req, res){
      console.log(req);
    res.sendFile(__dirname + '/facebook/login.html');
});
router.get('/signupfb', function(req, res){

      res.sendFile(__dirname + '/facebook/signup.html');
  });

router.post('/signup',async function(req, res){
     let userdata = req.body;
     console.log(userdata);
     if(!userdata){
      res.send("enter your email address");
     }
     let data = await userModule.create(userdata);
     console.log(data);
     res.send('registration successful');
});

router.get('/login',async function(req, res){
      let loginData = req.query;
      console.log(loginData);
      let data = await userModule.find(loginData);
      console.log(data);
      if(loginData.Email=="" || loginData.password==""){
            res.send("please enter your email or password");
      }
      if(data.length==0){
            res.send("please enter your valid email or password");
      }else {
            res.send("Successful Login"); 
      }
})
module.exports=router;