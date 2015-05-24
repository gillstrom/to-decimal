'use strict';
var test = require('ava');
var toDecimal = require('./');

test('to decimal', function (t) {
	t.assert(toDecimal(65) === 0.65);
	t.assert(toDecimal(1234.5) === 12.345);
	t.assert(toDecimal(0.1) === 0.001);
	t.assert(toDecimal(12.1245, 2) === 0.12);
	t.assert(toDecimal(6158.4256, 5) === 61.58426);
	t.assert(toDecimal(1234.5, 0) === 12);
	t.end();
});
