'use strong';

const requireBowerFiles = require('require-bower-files');
const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

global.window = {};
requireBowerFiles({self: true});

function runTest(is4byteCodePoint, description) {
  test(description, t => {
    t.strictEqual(is4byteCodePoint.name, 'is4byteCodePoint', 'should have a function name.');

    t.strictEqual(
      is4byteCodePoint('A'.codePointAt(0)),
      false,
      'should return false when it takes a code point of 1-byte character.'
    );

    t.strictEqual(
      is4byteCodePoint('º'.codePointAt(0)),
      false,
      'should return false when it takes a code point of 2-byte character.'
    );

    t.strictEqual(
      is4byteCodePoint('田'.codePointAt(0)),
      false,
      'should return false when it takes a code point of 3-byte character.'
    );

    t.strictEqual(
      is4byteCodePoint('𠮷'.codePointAt(0)),
      true,
      'should return true when it takes a code point of 4-byte character.'
    );

    t.strictEqual(
      is4byteCodePoint(0xfffffff),
      false,
      'should return true when it takes a number that is loo large to be used for code point.'
    );

    t.strictEqual(
      is4byteCodePoint(NaN),
      false,
      'should return false when it takes NaN.'
    );

    t.strictEqual(
      is4byteCodePoint(Infinity),
      false,
      'should return false when it takes infinity.'
    );

    t.throws(
      () => is4byteCodePoint('foo'),
      /^TypeError.*foo is not a number\. /,
      'should throw a type error when it takes a non-string value.'
    );

    t.throws(
      () => is4byteCodePoint(),
      /^TypeError.*Expected a number to check whether it's a code point of a 4-byte character or not\./,
      'should throw a type error when it takes no arguments.'
    );

    t.end();
  });
}

rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: rollupNodeResolve({jsnext: true})
}).then(bundle => {
  runTest(require('.'), 'require(\'is-4byte-code-point\')');
  runTest(global.window.is4byteCodePoint, 'window.is4byteCodePoint');
  runTest(requireFromString(bundle.generate({format: 'cjs'}).code), 'Module exports');
});
