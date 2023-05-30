const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const jsonParser = bodyParser.json();
const app = express();

var usermodel = require("./user")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {

    usermodel.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message


    }).then(function(createduser) {
        res.sendFile(__dirname + "/success.html")

    })
})

// req.body.firstName!==dets.firstname || req.body.lastName!==dets.lastname || req.body.password !== dets.signpassword





app.listen(3000, function() {
    console.log("server is started at port number 3000")
})


//api key
//d07026e0d4fc93de257132b1cb859bd4-us21