'use strict';
const resolveFrom = require('resolve-from');

function createModuleNotFoundErr(path) {
	const err = new Error('Cannot find module \'' + path + '\'');
	err.code = 'MODULE_NOT_FOUND';
	return err;
}

module.exports = function (fromDir, moduleId) {
	try {
		return require(resolveFrom(fromDir, moduleId));
	} catch (err) {
		if (err.message === 'missing path') {
			throw createModuleNotFoundErr(moduleId);
		}
	}
};

module.exports.silent = function (fromDir, moduleId) {
	try {
		return require(resolveFrom(fromDir, moduleId));
	} catch (err) {
		return null;
	}
};
