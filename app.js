const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const numExtractor = require("./numExtractor");
const probabilityDistribution = require("./probabilityDistribution");
const cumulativeDistribution = require("./cumulativeDistribution");
const multiplyCDF = require("./multiplyCDF");
const hel = require("./histoEqLevel");

const app = express();

app.use(express.static(__dirname+"/views"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.render(__dirname+"/views/index.ejs");
})

app.post("/result", (req, res) => {
    let grayLevelString = req.body.gray;
    let freqString = req.body.freq;

    let grayLevelArray = grayLevelString.split(" ");
    let freqArray = freqString.split(" ");

    grayLevelArray = numExtractor(grayLevelArray);
    freqArray = numExtractor(freqArray);

    const obj = {};

    let sum = freqArray.reduce((a,b)=>{return a+b},0);
    
    obj.grayLevel = grayLevelArray;
    obj.frequency = freqArray;
    obj.sum = sum;
    obj.pdf = probabilityDistribution(freqArray, sum);
    obj.cdf = cumulativeDistribution(obj.pdf);
    obj.cdfMul = multiplyCDF(obj.cdf, grayLevelArray[grayLevelArray.length-1]);
    obj.hel = hel(obj.cdfMul);

    res.render(__dirname+"/views/result.ejs", obj);

})

app.listen(process.env.PORT , () => {
    console.log("server started");
});
