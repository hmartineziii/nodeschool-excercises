var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream()
loud.pipe(through(function (chunk,_,next){
	this.push(chunk.toString().toUpperCase());
	next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)


//SOLUTION
// var trumpet = require('trumpet');
// var through = require('through2');
// var tr = trumpet();

// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function (buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// })).pipe(loud);

// process.stdin.pipe(tr).pipe(process.stdout);