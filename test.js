import test from 'ava';
import fn from './';

test('reqFrom', t => {
	t.is(fn('fixture', './fixture'), 'unicorn');
	t.throws(() => fn('fixture', './nonexistent'));
	const moduleNotFoundError = t.throws(() => {
		fn('fixture', './nonexistent');
	}, Error);
	t.is(moduleNotFoundError.code, 'MODULE_NOT_FOUND');
	t.is(moduleNotFoundError.message, 'Cannot find module \'./nonexistent\'');
});

test('reqFrom.silent', t => {
	t.is(fn.silent('fixture', './fixture'), 'unicorn');
	t.is(fn.silent('fixture', './nonexistent'), null);
});
