var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    return _.template('Hello <%= name %> (logins: <%= logins %>)'
    	)({name: collection.name,
    		logins:collection.login.length});
};

// export the worker function as a nodejs module
module.exports = worker;


//SOLUTION
// 'use strict';

// var _ = require("lodash");

// var template = function (inputvar) {

//     var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

//     return _.template(mytemplate)(inputvar);
// };

// module.exports = template;