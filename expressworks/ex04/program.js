var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.get('/', function (req, res){
	res.writeHead(200, {'content-type': 'text/html'})
	res.end('<form action="http://localhost:3000/form" method="POST"><input name="str"/>'+
		'<button type="submit" value="submit">Submit</button></form>')
});
app.post('/form', function (req, res){
	res.writeHead(200);
	res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2]||3000)