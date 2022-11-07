const all = require("all");
const authorModules = require("../authorModule/authorModule");

const createAuthor = async function (req, res) {
    let data = req.body;
    let author = await authorModules.create(data);
    console.log(author);
    res.send({ author: author, status: true });
};
const getAllAuthors = async function (req, res) {
    try {
        let allData = await authorModules.find();
        console.log(allData);
        res.send({ author: allData });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};
module.exports.createAuthor = createAuthor;
module.exports.getAllAuthors = getAllAuthors;
