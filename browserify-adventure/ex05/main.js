var url = require('url');
var querystring = require('querystring');

var addr = prompt();
var query = url.parse(addr).query;

console.log(url.resolve(addr, querystring.parse(query).file));