var uniq = require('uniq');
module.exports = function(prompt){
	var list = prompt.split(',');
	return uniq(list)
}