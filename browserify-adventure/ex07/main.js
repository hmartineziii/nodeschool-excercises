var fs = require('fs');
var sprintf = require('sprintf').sprintf;

var textInput = fs.readFileSync('/usr/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt');
var textArray = textInput.toString().split('\n');


for (var i=0; i<textArray.length; i++){
	if (i%5 == 0) {
		console.log(sprintf("%3d %s", i, textArray[i]));
	} else {
		console.log(sprintf("%3s %s","", textArray[i]));
	}
}
//sprintf(src, "%3d %s")
//sprintf("Current timestamp: %d", 300) // Current timestamp: 1398005382890