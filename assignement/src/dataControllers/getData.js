const booksModule = require("../booksModul/booksModule.js");
const authorModules = require("../authorModule/authorModule");
const bookNames = async function (req, res) {
    const author = await authorModules.findOne({ authorName: "Chetan Bhagat" });
    console.log(author);
    let Id = author.authorId;
    console.log(Id);
    const bookName = await booksModule
        .find({ authorId: Id })
        .select({ name: 1, _id: 0 });
    res.send({ data: bookName });
};
const authorName = async function (req, res) {
    const authorId = await booksModule.findOneAndUpdate(
        { name: "Two states" },
        { $set: { price: 100 } },
        { new: true }
    );
    console.log(authorId);
    let bookId = authorId.authorId;
    const authorName = await authorModules
        .findOne({ authorId: bookId })
        .select({ authorName: 1, _id: 0 });
    console.log(authorName);
    res.send({ authorName: authorName.authorName, price: authorId.price });
};
const booksWithAuthor= async function(req, res){
      const bookid = await (await booksModule.find({price:{$gte:50,$lte:100}}).select({authorId:1})).map(values =>values.authorId);
      console.log(bookid);
      const author = await authorModules.find({authorId:{$in:bookid}})
      res.send(author);
}
module.exports.bookNames = bookNames;
module.exports.authorName = authorName;
module.exports.booksWithAuthor= booksWithAuthor;
