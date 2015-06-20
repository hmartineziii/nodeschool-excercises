var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    _.reduce(collection, function(result, current, key, collection){
    	console.log(result);
    	if (_.find(result, {'article': current.article}))
    		console.log(_.find(result, {'article': current.article}))
    	else
    		return result.push(current);
    },[])
};

// export the worker function as a nodejs module
module.exports = worker;