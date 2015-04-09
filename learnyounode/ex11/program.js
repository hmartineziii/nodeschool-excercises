var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
	res.writeHead(200, {'content-type': 'text/plain'});
	var fileContents = fs.createReadStream(process.argv[3])
	fileContents.pipe(res)
}).listen(process.argv[2])