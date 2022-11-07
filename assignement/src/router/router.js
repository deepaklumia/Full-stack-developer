const express = require("express");
const router = express.Router();
const author = require("../createAuthor/createAuthor");
const books = require("../createBooks/createBooks");
const bothData = require("../dataControllers/getData");
router.get("/", function (req, res) {
    res.send("server is running on port 3000");
});
router.post("/createAuthors", author.createAuthor);
router.get("/getAllAuthors", author.getAllAuthors);
router.post("/createBooks", books.createBooks);
router.get("/getAllBooks", books.getAllBooks);
router.get("/booksName", bothData.bookNames);
router.get("/authorName", bothData.authorName);
router.get("/booksWithAuthor", bothData.booksWithAuthor);

module.exports = router;i
