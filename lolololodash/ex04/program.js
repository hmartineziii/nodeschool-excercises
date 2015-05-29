var _ = require("lodash");

var worker = function(collection) {
	var result = {'hot':[],'warm': []};
    return _.every(collection, function(town){
    	return _.any(town, function(temp){
    		return temp > 19 ? result['hot'].push(town) : result['warm'].push(town)
    	})
    })
}

// export the worker function as a nodejs module
module.exports = worker;