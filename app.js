var express = require('express');
var bcrypt = require('bcrypt')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var router = require('./router');
var db = require('./db')
var fs = require("fs");
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
app.use(router)
app.listen(1337, function () {
    console.log("ruunnniinnng at port 1337.....")
})