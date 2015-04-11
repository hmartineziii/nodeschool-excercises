var path = require('path');
var express = require('express');
var app = express();

var pathPublic = process.argv[3]||path.join(__dirname + '/public')
app.use(require('stylus').middleware(pathPublic));
app.use(express.static(pathPublic));
app.listen(process.argv[2]||3000);

