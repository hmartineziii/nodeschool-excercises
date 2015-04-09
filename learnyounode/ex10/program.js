var net = require('net');



function zeroFill(i) {
	return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket){
	var d = new Date();
	var YYYY = zeroFill(d.getFullYear());
	var MM = zeroFill(d.getMonth()+1); 
	var DD = zeroFill(d.getDate());
	var HH = zeroFill(d.getHours());
	var MN = zeroFill(d.getMinutes());
	socket.write(YYYY+'-'+MM+'-'+DD+' '+HH+':'+MN);
	socket.end('\n');
})

server.listen(process.argv[2]);


//SOLUTION
// var net = require('net')
    
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
