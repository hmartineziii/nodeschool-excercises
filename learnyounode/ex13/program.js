var http = require('http')

http.createServer(function(req, res){
	
	// console.log(req.headers);
	// console.log(req.method);
	res.writeHead(200, {'Content-Type': 'aplication/json'})
	

	if ((req.method == 'GET') && (req.url.slice(0,14) == '/api/parsetime')){
		var strObject = {}
		var moment = isoDate(req.url.slice(19));
		strObject["hour"] = moment.getHours();
		strObject["minute"] = moment.getMinutes();
		strObject["second"] = moment.getSeconds();
		res.end(JSON.stringify(strObject));
	}
	if ((req.method == 'GET') && (req.url.slice(0,13) == '/api/unixtime')){
		var strObject = {}
		var moment = isoDate(req.url.slice(18))
		strObject['unixtime'] = moment.getTime() 
		res.end(JSON.stringify(strObject));
	}

}).listen(process.argv[2])

function isoDate (dateInput){
	return new Date(dateInput)
}


//SOLUTION
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
