var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    return _.reduce(collection, function(result, current){
    	if (_.result(_.find(result, {"article": current.article})))
    		
    	return result
    },[]);
};

// export the worker function as a nodejs module
module.exports = worker;