var fs = require('fs');
var path = require('path');

var file = process.argv[2]||path.join(__dirname,'/data.txt');
fs.createReadStream(file).pipe(process.stdout)