var split = require('split');
var through = require('through2');
var toggle = false;
process.stdin
	.pipe(split())
	.pipe(through(function (line, _, next){
		if (toggle){
			toggle = false;
			this.push(line.toString().toUpperCase() + '\n');
			next();
		} else {
			toggle = true;
			this.push(line.toString().toLowerCase() + '\n');
			next();
		}
	})).pipe(process.stdout);

//SOLUTION
// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;
