const axios = require("axios");
const districtId = async function (req, res) {
    let id = req.query.district_id;
    let date = req.query.date;
    let vaccine = req.query.vaccine;
    let options = {
        method: "get",
        url: `https://cdndemo-api.co-vin.in/api/v4/appointment/sessions/findByDistrict?district_id=${id}&date=${date}$vaccine=${vaccine}`,
    };
    const result = await axios(options);
    console.log(result);
    res.send(result.data);
};
let getStates = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
        };
        let result = await axios(options);
        console.log(result);
        let data = result.data;
        res.status(200).send({ msg: data, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

const getWeather = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=3dfdc6df47ebc4921dc980161f7a9892",
        };
        const weather = await axios(options);
        let result = weather.data;
        console.log(result.main.temp);
        res.status(201).send({ temp: result.main.temp });
    } catch (erro) {
        res.status(500).send({ msg: erro });
    }
};
const sortTemp = async function (req, res) {
    try {
        const weather = [];
        let cities = [
            "Bengaluru",
            "Mumbai",
            "Delhi",
            "Kolkata",
            "Chennai",
            "London",
            "Moscow",
        ];
        for (let i = 0; i < cities.length; i++) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=3dfdc6df47ebc4921dc980161f7a9892`,
            };
            weather.push((await axios(options)).data);
        }
        let result = weather
            .map((value) => ({
                city: value.name,
                temp: value.main.temp,
            }))
            .sort((a, b) => a.temp - b.temp);

        console.log(result);
        res.status(201).send({ temp: result });
    } catch (erro) {
        res.status(500).send({ msg: erro });
    }
};

const getMemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes",
        };
        const result = await axios(options);
        console.log(result.data);
        res.status(200).send({ msg: result.data });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
};

const commentMemes = async function (req, res) {
    try {
        let memsComment = req.query;
        console.log(memsComment);
        let options = {
            method: "POST",
            url: `https://api.imgflip.com/caption_image?template_id=${memsComment.template_id}&text0=${memsComment.text0}&text1=${memsComment.text1}&username=${memsComment.username}&password=${memsComment.password}`,
        };
        const result = await axios(options);
        console.log(result.data);
        res.status(200).send({ msg: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};
module.exports.districtId = districtId;
module.exports.getStates = getStates;
module.exports.getWeather = getWeather;
module.exports.sortTemp = sortTemp;
module.exports.getMemes = getMemes;
module.exports.commentMemes = commentMemes;
