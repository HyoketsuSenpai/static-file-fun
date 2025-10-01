const express = require('express');
const path = require('path');
const fs = require('fs');

var app = express();

// simple logger middleware
app.use(function(req, res, next){
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});

app.listen(3000, function(){
    console.log(" App started on port 3000.\n http://localhost:3000");

});