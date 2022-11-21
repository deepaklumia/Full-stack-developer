const { Router, application } = require("express");
// const env = require('dotevn');
const express = require("express");
const app = express();
const router = require("./rauter/router");
app.use("/", router);
app.listen(process.env.PORT || 3000, function () {
    console.log(`server listening on port 3000`);
});
