import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('fixture', './fixture'), 'unicorn');
	t.is(fn('fixture', './fixture2'), null);
});
