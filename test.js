import test from 'ava';
import m from './';

test(t => {
	t.is(m('fixture', './fixture'), 'unicorn');
	t.throws(() => m('fixture', './nonexistent'));
	t.is(m.silent('fixture', './fixture'), 'unicorn');
	t.is(m.silent('fixture', './nonexistent'), null);
});
