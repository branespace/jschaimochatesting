'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet.js');

describe('greeter', function() {
	it('should return a string', function() {
		expect(greet('name')).to.be.a('string');
	});
	it('should return our name', function() {
		expect(greet('world')).to.be.equal('hello world');
	});
});
describe('executable', function() {
  /*Our buffer is small and the execution is fast, and
    all tests seem to come back just fine.  This may not be
    the optimal solution, but I can't seem to break it. */ 
	it('should take our name and return the same name', function(){
		var exec = require('child_process').execSync;
		var child;

		child = exec('node ' + __dirname + '/../bin/greet.js testname');
		expect(child.toString()).to.equal('hello testname\n');
	});
});
