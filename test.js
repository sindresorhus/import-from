import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('fixture', './fixture'), 'unicorn');
	t.throws(() => fn('fixture', './nonexistent'));
	t.is(fn.silent('fixture', './fixture'), 'unicorn');
	t.is(fn.silent('fixture', './nonexistent'), null);
});
