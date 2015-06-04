var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    var rObj = {};
    var byPerson = _.groupBy(collection, 'username');
    console.log(byPerson);
    _.forEach(byPerson, function(n, key){
    	console.log(n);
    	rObj[key] = _.size(n);
    })
    return rObj
};

// export the worker function as a nodejs module
module.exports = worker;