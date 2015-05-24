'use strict';

module.exports = function (val, digits) {
	if (typeof val !== 'number') {
		throw new Error('Expected a number');
	}

	if (Number(digits) || Number(digits) === 0) {
		return parseFloat((val / 100).toFixed(digits));
	}

	return val / 100;
};
