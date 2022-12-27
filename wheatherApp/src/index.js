const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('../router/router');
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use('/', router );

app.listen(process.env.PORT || 3001 , ()=>{
    console.log('listening on port ' + 3001);
});