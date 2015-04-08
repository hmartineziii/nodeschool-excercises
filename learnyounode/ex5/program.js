var fs = require('fs');
var path = require('path');


var directory = process.argv[2];
var ext = '.' + process.argv[3];

list1 = [];

fs.readdir(directory, function(error, listOfFiles){
	for (var i = 0; i < listOfFiles.length; i++){
		if (path.extname(listOfFiles[i]) == ext){
			list1.push(listOfFiles[i]);
			console.log(listOfFiles[i]);
		};
	};
});



/*
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/