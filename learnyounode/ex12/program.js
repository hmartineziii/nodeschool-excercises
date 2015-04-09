var http = require('http');
var map = require('through2-map')

var server= http.createServer(function(req,res){
	req.pipe(map(function (chunk){
		console.log(chunk.toString())
		// chunk.toString().toUpperCase()
	}))
	res.end()
})
server.listen(process.argv[2])
// http.request({
// 	method: POST
// },function (req, res){
// 	console.log(req)
// })