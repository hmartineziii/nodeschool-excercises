var _ = require("lodash");


function checktemp(temps){
	return temps > 19
}

var worker = function(collection) {
	var result = {'hot':[],'warm': []};
	_.forEach(collection, function(town, townname){
		if (_.every(collection[townname], checktemp))
			result['hot'].push(townname);
		else if (_.any(collection[townname], checktemp))
			result['warm'].push(townname)
	})
	return result
}

// export the worker function as a nodejs module
module.exports = worker;