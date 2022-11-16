const orderMiddleWare = async function (req, res, next){
      const headers = req.headers.isfreeappuser;
    
      if(!headers){
            res.send('The request is missing a mandatory header');
      }
      
      next();
}
module.exports.orderMiddleWare = orderMiddleWare;