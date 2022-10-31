const express=require('express');
const router=express.Router();
const book=require('../createBooks/createbooks')
router.get('/', function(req, res) {
      res.send("server is running on port 3000");
});
router.post('/createBooks',book.createBooks);
router.get('/getAllBooks',book.getAllBooks);
router.get('/bookList',book.bookList);
router.post('/getBooksInYear',book.getBooksInYear);
router.get('/getParticularBooks/:value',book.getParticularBooks);
router.get('/getRandomBooks',book.getRandomBooks);
module.exports = router;