const { default: mongoose } = require("mongoose");
const newBookSchema = require("../modules/newBookModule");
const ObjectId = mongoose.Types.ObjectId;
const createNewBook = async function (req, res) {
    const data = req.body;
    if (!data.author || !data.publisher) {
        res.send("this detail is required");
    } else if (!ObjectId.isValid(data.author)|| !ObjectId.isValid(data.publisher) ){
        res.send("the author is not present");
    } else {
        const newBook = await newBookSchema.create(data);
        console.log(newBook);
        res.send({ data: newBook });
    }
};
const getNewBook = async function(req, res){
    const newBook = await newBookSchema.find().populate("author publisher");
    console.log(newBook);
    res.send({ data: newBook });
}
module.exports.getNewBook = getNewBook;
module.exports.createNewBook = createNewBook;
