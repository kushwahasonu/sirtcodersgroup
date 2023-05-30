const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Newdata");


var userschema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        subject: String,
        message: String
    })
    // name of database  
module.exports = mongoose.model("maindetails", userschema);