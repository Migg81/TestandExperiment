var express = require("express");
var app     = express();
var path    = require("path");

//app.use(express.static(path.join(__dirname, '../', 'LearnAngularModule')))

app.use(express.static(__dirname + '/LearnAngularModule'));
app.use(express.static(__dirname + '/AngularByUsingGithubAPi'));

app.listen(3000);

console.log("Running at Port 3000");

console.log("dir path : "+__dirname + '/LearnAngularModule');

