const express= require('express');
const app = express();
const router= require('./router/router');
const bodyParser = require('body-parser');
const {default: mongoose } = require('mongoose');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 
mongoose.connect("mongodb+srv://deepak98:deepaklumia@book.4bu11tl.mongodb.net/test",{useNewUrlParser: true})
.then(()=>{console.log('mongoose connected successfully')})
.catch((err)=>{console.log('not connected to Mongoose')})


app.use('/',router);

app.listen(process.env.PORT || 3000, function(){
      console.log('listening on port 3000')
})