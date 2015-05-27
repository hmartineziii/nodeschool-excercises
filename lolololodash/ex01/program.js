var _ = require('lodash');

var filterwhere = function(collection){
	return _.where(collection, {active: true})
}

module.exports = filterwhere;