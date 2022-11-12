const newAuthorData = require('../modules/newAuthorModule');
const getNewAuthor = async function(req, res){
      const newAuthor = await newAuthorData.find();
      console.log(newAuthor);
      res.send({data: newAuthor});
}
module.exports.getNewAuthor= getNewAuthor;