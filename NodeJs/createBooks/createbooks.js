const all = require("all");
const bookModel = require("../booksModel.js/booksModel");
const createBooks = async function (req, res) {
    try {
        let books = req.body;
        let data = await bookModel.create(books);
        res.send({ book: data });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
const getAllBooks = async function (req, res) {
    try {
        let books = await bookModel.find();
        res.send({ data: books });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
const bookList = async function (req, res) {
    try {
        let books = await bookModel
            .find()
            .select({ bookName: 1, authorName: 1 });
        console.log(books);
        let data = "";
        for (let i = 0; i < books.length; i++) {
            data +=
                "<p>bookName:" +
                books[i].bookName +
                "</p><p>authorName:" +
                books[i].authorName +
                "</p>";
        }
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
const getBooksInYear = async function (req, res) {
    try {
        let year1 = req.body.year;
        let BooksInyear = await bookModel.find({ year: year1 });
        console.log(BooksInyear);
        if (BooksInyear.length==0){
            res.send("book is not available on this year");
        } else {
            res.send(BooksInyear);
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
const getParticularBooks= async function (req, res) {
    const value = req.params.value;
    const data = await bookModel.find({});
    const allvalue = data.filter((element) => {
        if(element.bookName===value||element.year===Number(value)||element.price===Number(value)||element.authorName===value||element.totalPages===Number(value)){
            return true;
        }else{
            return false;
        }
    });
    // console.log(allvalue);
    res.send(allvalue);
}
const getRandomBooks= async function (req, res) {
    const books=await bookModel.find({stockAvailable:true,totalPages:{$gte:500}});
    res.send(books);
}
module.exports.createBooks = createBooks;
module.exports.getAllBooks = getAllBooks;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks=getParticularBooks;
module.exports.getRandomBooks=getRandomBooks;
