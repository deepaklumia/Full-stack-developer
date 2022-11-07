const mongoose = require("mongoose");
const authorModules = new mongoose.Schema(
    {
        authorId: {
            type: Number,
            unique: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        age: Number,
        address: String,
    },
    { timestamps: true }
);
module.exports = mongoose.model("Author", authorModules);
