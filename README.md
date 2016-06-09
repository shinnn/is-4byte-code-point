# is-4byte-code-point

[![NPM version](https://img.shields.io/npm/v/is-4byte-code-point.svg)](https://www.npmjs.com/package/is-4byte-code-point)
[![Bower version](https://img.shields.io/bower/v/is-4byte-code-point.svg)](https://github.com/shinnn/is-4byte-code-point/releases)
[![Build Status](https://travis-ci.org/shinnn/is-4byte-code-point.svg?branch=master)](https://travis-ci.org/shinnn/is-4byte-code-point)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-4byte-code-point.svg)](https://coveralls.io/github/shinnn/is-4byte-code-point?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/is-4byte-code-point.svg)](https://david-dm.org/shinnn/is-4byte-code-point)
[![Dependency Status](https://david-dm.org/shinnn/is-4byte-code-point.svg)](https://david-dm.org/shinnn/is-4byte-code-point)

Check if a given number is a [code point](http://unicode.org/glossary/#code_point) of [UTF-8](https://tools.ietf.org/html/rfc3629) 4-byte character

```javascript
import is4byteCodePoint from 'is-4byte-code-point';

is4byteCodePoint('Ａ'.codePointAt(0)); //=> false
is4byteCodePoint('👍'.codePointAt(0)); //=> true
```

## Installation

#### [npm](https://www.npmjs.com/)

```
npm install is-4byte-code-point
```

#### [Bower](http://bower.io/)

```
bower install is-4byte-code-point
```

### is4byteCodePoint(*number*)

*number*: `Number`  
Return: `Boolean`

It returns `true` if the number is no fewer than `65536` and no greater than `1114111`, otherwise `false`.

```javascript
is4byteCodePoint(-1); //=> false
is4byteCodePoint(0); //=> false
is4byteCodePoint(100000); //=> true
is4byteCodePoint(1000000); //=> false
is4byteCodePoint(NaN); //=> false
is4byteCodePoint(Infinity); //=> false
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
