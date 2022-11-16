const mongoose = require("mongoose");
const userModules = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        balance: {
            type: Number,
            default: 100,
        },
        addresses: {
            type: String,
        },
        age: Number,
        gender: {
            type: String,
            enum: ["female", "male", "other"],
        },
        isFreeAppUser: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("userData", userModules);
