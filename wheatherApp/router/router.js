const express = require('express');
const router = express.Router();
const axios = require('axios');
let city = "shanghai";
let temp;
let button;


router.get('/', async function (req, res) {
    if (!button) {
        let option = {
            method: 'get',
            url: `http://api.waqi.info/feed/${city}/?token=demo`
        }
        let result = await axios(option);
        temp = result.data.data.aqi
    }
    // console.log(JSON.stringify(result.data));
    

    res.render("index", { wheather: temp, location: city });
});
router.post("/", async function (req, res) {
    console.log(req.body);
    city = req.body.city;
    button = req.body.button;
    let option = {
        method: 'get',
        url: `http://api.waqi.info/feed/${city}/?token=demo`
    }
    let result = await axios(option);
    
    temp = result.data.data.aqi;
    res.redirect('/')
});


module.exports = router;