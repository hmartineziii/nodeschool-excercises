var _ = require('lodash');

var filterwhere = function(collection, props){
	return _.where(collection, {active: true})
}

module.exports = filterwhere;