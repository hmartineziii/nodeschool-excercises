var http = require('http');

var req = http.get(process.argv[2], function (res){
	data1 = ""
	res.setEncoding('utf8');
	res.on("data", function (chunk){
		data1 += chunk
	});
	req.on('error', function (err){
		console.log('Error: ' + err.message)
	});

	res.on('end', function () {
		console.log(data1.length);
		console.log(data1);
	});
})
