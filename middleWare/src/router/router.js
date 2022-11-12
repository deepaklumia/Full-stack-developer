const { response } = require('express');
const express = require('express');
const router = express.Router();
const newBook =require('../createData/createNewBook');
const newAuthor = require('../createData/createNewAuthor');
const newPublisher= require('../createData/createNewPublisher');
router.get('/', function(req, res){
      res.send("server is running on port 3000");
});
router.post('/createNewBook',newBook.createNewBook);
router.post('/createNewAuthor',newAuthor.createNewAuthor);
router.post('/createNewPublisher',newPublisher.createNewPublisher);
router.get('/getNewAuthor',newAuthor.getNewAuthor);
router.get('/getNewBook',newBook.getNewBook);
router.get('/useMiddleWare',newBook.useMiddleWare);




module.exports=router;