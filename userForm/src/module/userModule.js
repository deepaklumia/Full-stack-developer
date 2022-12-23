const mongoose = require('mongoose');
const userModule = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true
        },
        LastName: {type: String, required: true},
        Mobile: {type: Number, required: true},
        Email: {type: String, required: true},
        Password: {type: String, required: true}
    },{timestamps:true}

);
module.exports = mongoose.model('User',userModule);