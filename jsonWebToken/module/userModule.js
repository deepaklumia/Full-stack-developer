const mongoose= require('mongoose');
const userModules= new mongoose.Schema({
      "firstName":{
            type : String,
            required : true
      },
      "lastName":{
            type : String,
            required :true
      },
      "mobile":{
            type : String,
            required : true
      },
      "emailId":{
            type :String,
            required: true
      },
      "password":{
            type :String,
            required:true
      },
      "gender":{
            type :String,
            enum:["male", "female","other"]
      },
      "age":Number
},{timestamps:true});
module.exports= mongoose.model('UserData',userModules);