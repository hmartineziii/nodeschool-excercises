// var _ = require("lodash");

// var worker = function(collection) {
//     return _.sortBy(collection, function(node){
//     	return -node.quantity
//     })
// }

// // export the worker function as a nodejs module
// module.exports = worker;
var _ = require("lodash");

var worker = function(collection) {
    return _.sortBy(collection, function(node){
    	return node.quantity
    }).reverse()
}

// export the worker function as a nodejs module
module.exports = worker;