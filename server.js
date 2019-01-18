var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

//Body Parser
app.use(bodyParser.json());
//Mongoose
mongoose.connect("mongodb://localhost/charts");

app.listen(8000, function(){
    console.log("Listening on port 8000");
})
