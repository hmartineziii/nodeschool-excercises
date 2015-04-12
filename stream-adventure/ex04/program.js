
var through = require('through2');


var stream  = through(write,end);


function write (buffer, encoding, next){
	buffer = buffer.toString().toUpperCase();
	this.push(buffer);
	next();
}

function end (done){
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);

//SOLUTION
// var through = require('through2');
// var tr = through(function (buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);
