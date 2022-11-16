const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const orderModules = new mongoose.Schema({
    userId: {
        type: objectId,
        ref: "userData",
        required: true,
    },
    productId: {
        type: objectId,
        ref: "productData",
        required: true,
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});
module.exports = mongoose.model("orderData", orderModules);
