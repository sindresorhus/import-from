'use strict';
const Module = require('module');
const path = require('path');
const resolveFrom = require('resolve-from');

const hasNativeFunction = typeof Module.createRequireFromPath === 'function';

const requireFromPath = (fromDir, moduleId) => {
	if (!hasNativeFunction) {
		return require(resolveFrom(fromDir, moduleId));
	}

	return Module.createRequireFromPath(path.resolve(fromDir, 'index.js'))(moduleId);
};

module.exports = requireFromPath;

module.exports.silent = (fromDir, moduleId) => {
	try {
		return requireFromPath(fromDir, moduleId);
	} catch (error) {
		return null;
	}
};
