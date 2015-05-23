'use strict';
var test = require('ava');
var toDecimal = require('./');

test('to decimal', function (t) {
	t.assert(toDecimal(65) === 0.65);
	t.assert(toDecimal(1234.50) === 12.3450);
	t.assert(toDecimal(0.1) === 0.001);
	t.end();
});
