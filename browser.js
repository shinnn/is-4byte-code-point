/*!
 * is-4byte-code-point | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-4byte-code-point
*/
window.is4byteCodePoint = function is4byteCodePoint(num) {
  'use strict';

  if (typeof num !== 'number') {
    throw new TypeError(
      String(num) +
      ' is not a number. Expected a number to check whether it\'s a code point of' +
      ' a 4-byte character or not.'
    );
  }

  return window.min4byteCodePoint <= num && num <= window.maxCodePoint;
};
