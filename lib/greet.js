'use strict'

var greet = module.exports = exports = function(name){
	return 'hello ' + name;
}

var inputname = process.argv[2];
