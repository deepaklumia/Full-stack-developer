const mongoose = require("mongoose");
const productModules = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: String,
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("productData", productModules);
