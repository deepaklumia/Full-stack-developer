const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const router = require("./router/router");
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req,res, next){
    const date=moment().format('DD/MM/YYYY HH:MM:SS');
    const ip=req.ip;
    const url=req.originalUrl;
    console.log(date,ip,url);
    next();
});
const mongooseUrl =
    "mongodb+srv://deepak98:deepaklumia@book.4bu11tl.mongodb.net/test";

mongoose
    .connect(mongooseUrl, { useNewUrlParser: true })
    .then(() => {
        console.log("mongodb is  connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/", router);
app.listen(process.env.PORT || 3001, function () {
    console.log(
        "Express server listening on port " + (process.env.PORT || 3001)
    );
});