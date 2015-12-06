# req-from [![Build Status](https://travis-ci.org/sindresorhus/req-from.svg?branch=master)](https://travis-ci.org/sindresorhus/req-from)

> Require a module like [`require()`](https://nodejs.org/api/globals.html#globals_require) but from a given path

Unlike `require()` it returns `null` instead of throwing when the module can't be found.


## Install

```
$ npm install --save req-from
```


## Usage

```js
const reqFrom = require('req-from');

// there's a file at `./foo/bar.js`

reqFrom('foo', './bar');
```


## API

### reqFrom(fromDir, moduleId)

#### fromDir

Type: `string`

Directory to require from.

#### moduleId

Type: `string`

What you would use in `require()`.


## Tip

Create a partial using a bound function if you want to require from the same `fromDir` multiple times:

```js
const reqFromFoo = reqFrom.bind(null, 'foo');

reqFromFoo('./bar');
reqFromFoo('./baz');
```


## Related

- [req-cwd](https://github.com/sindresorhus/req-cwd) - Require a module from the current working directory
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [resolve-cwd](https://github.com/sindresorhus/resolve-cwd) - Resolve the path of a module from the current working directory
- [lazy-req](https://github.com/sindresorhus/lazy-req) - Require modules lazily


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
