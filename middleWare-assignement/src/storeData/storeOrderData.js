const orderModules = require("../module/orderModule");
const userModule = require("../module/userModule");
const productModule = require("../module/productModule");
const mongoose= require('mongoose');
const objectId = mongoose.Types.ObjectId;
const storeOrderData = async function (req, res) {
    const { userId, productId } = req.body;
    let isFreeAppUser = req.headers["isfreeappuser"];
    if (!objectId.isValid(userId)) {
        res.send("These validations fail For every purchase");
    }
    if (!objectId.isValid(productId)) {
        res.send("These validations fail For every purchase");
    }
    if (isFreeAppUser === "false") {
        let userData = await userModule.findById(userId);
        let productData = await productModule.findById(productId);
        if(userData.balance>=productData.price){
            let deducted = userData.balance - productData.price;
            await userModule.findById(userId).update({
                $set: {balance:deducted},
                new:true
            });
            let orderData = await orderModules.create({
                userId: userId,
                productId: productId,
                amount: productData.price,
                isFreeAppUser: isFreeAppUser,
            });
            res.send({ status: true, data: orderData });
        }else{
            res.send('you have not enough balance');
        }
       
    } else {
        let orderData = await orderModules.create({
            userId: userId,
            productId: productId,
            amount: 0,
            isFreeAppUser: isFreeAppUser,
        });
        res.send({status:true,data:orderData});
    }
};
module.exports.storeOrderData=storeOrderData;