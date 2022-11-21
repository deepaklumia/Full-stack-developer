const express = require("express");
const router = express.Router();
const api = require("../fetchApi/collection");
router.get("/", function (req, res) {
    res.send("run server");
});
router.get("/districtId", api.districtId);
router.get("/getState", api.getStates);
router.get("/getWeather", api.getWeather);
router.get("/sortTemp", api.sortTemp);
router.post("/getMemes", api.getMemes);
router.post("/commentMemes", api.commentMemes);
module.exports = router;
