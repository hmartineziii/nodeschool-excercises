var http = require('http')
var bl = require('bl')


var responseCounter = 0
var aCollector = []

for (i=0; i<3; i++){
	httpGet(i);
};

function httpGet(index){ 
	http.get(process.argv[2+index], function (response) {
  		response.pipe(bl(function (err, data) {
    		if (err)
      			return console.error(err)
    		aCollector[index] = data.toString()
  		}));
  		response.on('end', function(){
  			responseCounter += 1;
  			if (responseCounter >=3) {
  				printResults()
  			}
  		});
	});
};

function printResults (){
	aCollector.forEach(function(member){
		console.log(member);
	});
}

