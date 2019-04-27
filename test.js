import test from 'ava';
import importFrom from '.';

test('importFrom()', t => {
	t.is(importFrom('fixture', './fixture'), 'unicorn');
	t.throws(() => importFrom('fixture', './nonexistent'));

	const moduleNotFoundError = t.throws(() => {
		importFrom('fixture', './nonexistent');
	}, Error);
	t.is(moduleNotFoundError.code, 'MODULE_NOT_FOUND');
	t.regex(moduleNotFoundError.message, /^Cannot find module '.\/nonexistent'/);
});

test('importFrom.silent()', t => {
	t.is(importFrom.silent('fixture', './fixture'), 'unicorn');
	t.is(importFrom.silent('fixture', './nonexistent'), undefined);
});
