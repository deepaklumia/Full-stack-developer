const newAuthorSchema= require('../modules/newAuthorModule');
const createNewAuthor = async function(req,res){
      const data = req.body;
      const newAuthor= await newAuthorSchema.create(data);
      console.log(data);
      res.send({data:newAuthor});
}
const getNewAuthor = async function(req, res){
      const newAuthor = await newAuthorSchema.find();
      console.log(newAuthor);
      res.send({data: newAuthor});
}
module.exports.getNewAuthor= getNewAuthor;
module.exports.createNewAuthor= createNewAuthor;