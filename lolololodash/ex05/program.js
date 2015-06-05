var _ = require("lodash");
    
    var worker = function(collection) {
        // do work; return stuff
        return _.chain(collection)
        .map(function(value){
        	return value.toUpperCase()+"CHAINED";
        })
        .sortBy()
        .value();
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;