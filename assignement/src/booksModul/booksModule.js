const mongoose = require("mongoose");
const booksModule = new mongoose.Schema(
    {
        bookName: String,
        authorId: Number,
        price: Number,
        ratings: Number,
    },
    { timestamps: true }
);
module.exports = mongoose.model("newBooks", booksModule);
