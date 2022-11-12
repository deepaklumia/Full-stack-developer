const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const newBookSchema = new mongoose.Schema({
      name:{
            type:String,
            required:true,
      },
      author:{
            type:objectId,
            required:true,
            ref:"newAuthor"
      },
      price:Number,
      rating:Number,
      publisher:{
            type:objectId,
            required:true,
            ref:"newPublisher"
      }
      
},{timestamps:true});
module.exports = mongoose.model('newBook1',newBookSchema);