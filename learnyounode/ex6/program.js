var mymodule = require('./mymodule');
var directory = process.argv[2];
var ext = process.argv[3];


mymodule(directory, ext, function(err, list){
	if (err)
		return console.error('There was an error:', err)
	
	list.forEach(function(file) {
		console.log(file);	
	});
});