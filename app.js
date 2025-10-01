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

// simple middleware that servers the files in static
app.use(function(req, res, next){
    var filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath,function(err, fileInfo){
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(filePath);
        }
        else {
            next();
        }
    });
});

// 404 handler middleware
app.use(function(req,res){
    res.status(404).send("File not found");
});

app.listen(3000, function(){
    console.log(" App started on port 3000.\n http://localhost:3000");

});