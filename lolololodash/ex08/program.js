// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    var sum = _.reduce(collection, function(total,n){
    	return total + n.income
    },0);
    var avg = sum / collection.length;
    // console.log(avg);

    var underperform = _.sortBy(_.filter(collection, function(entry){
    	return entry.income <= avg
    }),'income');
    // console.log(underperform);
    var overperform = _.sortBy(_.filter(collection, function(entry){
    	return entry.income > avg
    }),'income');

    return {"average": avg,
			"underperform": underperform,
			"overperform": overperform}
};

// export the worker function as a nodejs module
module.exports = worker;
