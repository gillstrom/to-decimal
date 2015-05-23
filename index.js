'use strict';

module.exports = function (val) {
	if (typeof val !== 'number') {
		throw new Error('Expected a number');
	}

	return val / 100;
};
