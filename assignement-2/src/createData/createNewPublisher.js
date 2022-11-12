const newPublisherSchema = require('../modules/newPublisherModule');
const createNewPublisher = async function(req, res){
      const data= req.body;
      const newAuthor= await newPublisherSchema.create(data);
      console.log(data);
      res.send({data:newAuthor});
}
module.exports.createNewPublisher= createNewPublisher;