var fs = require('fs');
var path = require('path');

module.exports = function (directory, ext, callback) {

	fs.readdir(directory, function(err, listOfFiles){
		list1 = [];
		if (err)
			return callback(err)
		listOfFiles.forEach( function(f){
			if (path.extname(f) == '.' + ext){
				list1.push(f);
			};
		})
		return callback(null, list1);			
	});

}