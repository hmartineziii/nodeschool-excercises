var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    var orders = _.groupBy(collection, 'article');
    var arr =[];
    _.forEach(orders, function(item){
    	var quantity = _.reduce(item,function(total,n){
    		return total + n.quantity
    	},0)
    	var title = item[0].article;
    	arr.push({"article":title, "total_orders": quantity})
    });
    console.log(arr);
    return _.sortBy(arr, "total_orders").reverse()
};

// export the worker function as a nodejs module
module.exports = worker;


//SOLUION
// 'use strict';

// var _ = require("lodash");

// var overview = function (orders) {

//     var overviewarray = [],
//         total = 0;

//     // Group by article
//     orders = _.groupBy(orders, 'article');

//     _.forEach(orders, function (item, key) {

//         key = parseInt(key);
//         total = 0;

//         // If only one article
//         if (item.length === 1) {
//             total = item[0].quantity;

//         // Else make sum of all orders
//         } else {
//             total = _.reduce(item, function(sum, item) {
//                 return sum + item.quantity;
//             }, 0);
//         }

//         overviewarray.push({
//             article: key,
//             total_orders: total
//         });

//     });

//     // Order
//     overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

//     return overviewarray;
// };

// module.exports = overview;
