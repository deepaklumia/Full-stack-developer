const { console } = require("movement/lib/cli");
const userModules = require("../../module/userModule");
const jwt = require("jsonwebtoken");

const storeUserData = async function (req, res) {
    let userData = req.body;

    let data = await userModules.create(userData);

    res.send({ status: true, userData: data });
};

const login = async function (req, res) {
    const emailId = req.body.emailId;
    const password = req.body.password;
    const userData = await userModules.findOne({
        emailId: emailId,
        password: password,
    });
    if(!userData){
      res.send({ status: false, message:"invalied emailId or password"});
    }
    const token = await jwt.sign(
        { token: userData._id.toString() },
        "jsonwebtoken"
    );
    req.headers.token = token;
//     console.log({ token: token });
    res.send({ status: true, msg:token});
};
const userId=async function(req, res){
      const token= req.headers["x-auth-token"];
      if(!token){ res.send({status:false,msg:"token must be persent"})};
      
      const decodedToken= await jwt.verify(token,'jsonwebtoken');
      if(!decodedToken){ res.send({status:false,msg:"token is not valid"})};
      
      const userid=req.params.userId;
      const userData=await userModules.findById(userid);
      if(!userData){ res.send({status:false,msg:"no such user exists"})};
      return res.send({status:true,user:userData})

      
}
const updateUser= async function(req, res){
    const token= req.headers["x-auth-token"];
    if(!token){ res.send({status:false,msg:"token must be persent"})};
    
    const decodedToken= await jwt.verify(token,'jsonwebtoken');
    if(!decodedToken){ res.send({status:false,msg:"token is not valid"})};
    
    const userid=req.params.userId;
    const userData=await userModules.findByIdAndUpdate(
        {_id:userid},
        {$set:{firstName:"Raja",lastName:"Babu"}},
        {new:true}
    );
    if(!userData){ res.send({status:false,msg:"no such user exists"})};
    return res.send({status:true,user:userData})
}
const deleteUser= async function(req, res) {
    const token= req.headers["x-auth-token"];
    if(!token){ res.send({status:false,msg:"token must be persent"})};
    
    const decodedToken= await jwt.verify(token,'jsonwebtoken');
    if(!decodedToken){ res.send({status:false,msg:"token is not valid"})};
    
    const userid=req.params.userId;
    const userData=await userModules.deleteOne({_id:userid});
    if(!userData){ res.send({status:false,msg:"no such user exists"})};
    return res.send({status:true,user:userData})
}

module.exports.storeUserData = storeUserData;
module.exports.login = login;
module.exports.userId= userId;
module.exports.updateUser= updateUser;
module.exports.deleteUser= deleteUser;
