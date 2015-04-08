var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    var lines = fileContents.toString().split('\n').length-1
    console.log(lines);
});