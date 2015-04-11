var express = require('express');
var app = express();


app.get('/home', function (req, res){
	res.end('Hello World!')
}).listen(process.argv[2])