'use strict';
const Module = require('module');
const path = require('path');
const resolveFrom = require('resolve-from');

const hasNativeFunction = typeof Module.createRequireFromPath === 'function';

const requireFromPath = hasNativeFunction ?
	(fromDir, moduleId) => {
		const p = path.resolve(fromDir, 'index.js');
		return Module.createRequireFromPath(p)(moduleId);
	} :
	(fromDir, moduleId) => require(resolveFrom(fromDir, moduleId));

module.exports = requireFromPath;

module.exports.silent = (fromDir, moduleId) => {
	try {
		return requireFromPath(fromDir, moduleId);
	} catch (error) {
		return null;
	}
};
