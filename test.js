import test from 'ava';
import m from '.';

test('importFrom()', t => {
	t.is(m('fixture', './fixture'), 'unicorn');
	t.throws(() => m('fixture', './nonexistent'));

	const moduleNotFoundError = t.throws(() => {
		m('fixture', './nonexistent');
	}, Error);
	t.is(moduleNotFoundError.code, 'MODULE_NOT_FOUND');
	t.is(moduleNotFoundError.message, 'Cannot find module \'./nonexistent\'');
});

test('importFrom.silent()', t => {
	t.is(m.silent('fixture', './fixture'), 'unicorn');
	t.is(m.silent('fixture', './nonexistent'), null);
});
