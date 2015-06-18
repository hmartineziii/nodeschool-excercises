var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    _.reduce(collection, function(result, current, key, collection){
    	// if (result[current].article)
    		// result[current].quantity = 
    },{})
};

// export the worker function as a nodejs module
module.exports = worker;