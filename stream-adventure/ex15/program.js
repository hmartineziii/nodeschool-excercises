var tar = require('tar');
var crypto = require('crypto');
var zlib = require('zlib');
var concat = require('concat-stream');

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var gunzip = zlib.createGunzip();
var parser = tar.Parse();

parser.on('entry', function (e){
	var hasher = crypto.createHash('md5', {encoding: 'hex'});
	if (e.type !== 'File') return;
	e.pipe(hasher).pipe(concat(function(hash){
		console.log(hash + ' ' + e.path);
	}));
});

process.stdin
	.pipe(decipher)
	.pipe(gunzip)
	.pipe(parser)
	//parser).pipe(process.stdout)//.pipe(zlib.createGunzip()).pipe(grouper)

//SOLUTION
  // var crypto = require('crypto');
  // var tar = require('tar');
  // var zlib = require('zlib');
  // var concat = require('concat-stream');

  // var parser = tar.Parse();
  // parser.on('entry', function (e) {
  //     if (e.type !== 'File') return;
      
  //     var h = crypto.createHash('md5', { encoding: 'hex' });
  //     e.pipe(h).pipe(concat(function (hash) {
  //         console.log(hash + ' ' + e.path);
  //     }));
  // });

  // var cipher = process.argv[2];
  // var pw = process.argv[3];
  // process.stdin
  //     .pipe(crypto.createDecipher(cipher, pw))
  //     .pipe(zlib.createGunzip())
  //     .pipe(parser)
  // ;