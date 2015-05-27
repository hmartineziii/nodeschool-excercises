var _ = require("lodash");

var worker = function(collection) {
    return _.forEach(collection, function(node){
    	if (node.population >= 1)
    		return node.size = 'big'
    	else if (node.population >= 0.5)
    		return node.size = 'med'
    	else
    		return node.size = 'small'
    })
}

// export the worker function as a nodejs module
module.exports = worker;