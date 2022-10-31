const mongoose=require('mongoose');
const bookSchema= new mongoose.Schema( {
    bookName:{
      type:String,
      required:true
    },
    price:Number,
    year:{
      type: Number,
      default: 2021,
    },
    authorName:{
      type: String,
      required:true
    },
    totalPages:Number,
    stockAvailable:{
      type: Boolean,
      default:false
    }
},{timestamps:true});

module.exports = mongoose.model('AllBooks',bookSchema)















/*
bookName( mandatory
field), price containing Indian and european price, 
year ( should be 2021 if no year is provided) , tags
array, authorName, totalPages , stockAvailable ( true false)*/ 