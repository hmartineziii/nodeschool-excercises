var _ = require("lodash");
    
var worker = function(collection) {
	var rArray=[];
    // do work; return stuff
    var byPerson = _.groupBy(collection, 'username');
    _.forEach(byPerson, function(n, key){
    	var rObj = {};
    	rObj['username'] = key
    	rObj['comment_count'] = _.size(n);
    	rArray.push(rObj);
    	idx+=1;
    })
    return _.sortBy(rArray,'comment_count').reverse()
};

// export the worker function as a nodejs module
module.exports = worker;