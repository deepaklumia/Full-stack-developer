const userModules=require('../module/userModule');
const storeUserData= async function(req,res) {
      const user= req.body;
      user.isFreeAppUser=req.headers['isfreeappuser'];
      const data= await userModules.create(user);
      console.log(user);
      res.send({status:true, data:data});
};
module.exports.storeUserData= storeUserData;