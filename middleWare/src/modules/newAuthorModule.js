const mongoose= require('mongoose');
const newAuthorSchema = new mongoose.Schema({
      authorName:{
            type: String,
            required:true
      },
      age:{ 
            type: Number,
            // required:true
      },
      adress:{
            type: String,
            // required:true
      },
      rating:Number,
},{timestamps:true});
module.exports=mongoose.model('newAuthor',newAuthorSchema);