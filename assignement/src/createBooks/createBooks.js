const booksModule = require("../booksModul/booksModule.js");
const createBooks = async function (req, res) {
    let bookData = req.body;
    let book = await booksModule.create(bookData);
    console.log(book);
    res.send({ books: book, status: true });
};
const getAllBooks = async function (req, res) {
    let allBooks = await booksModule.find();
    console.log(allBooks);
    res.send({ books: allBooks });
};
module.exports.createBooks = createBooks;
module.exports.getAllBooks = getAllBooks;
