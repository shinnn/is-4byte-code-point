/*!
 * is-4byte-code-point | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-4byte-code-point
*/
import MAX_CODE_POINT from 'max-code-point';
import MIN_4BYTE_CODE_POINT from 'min-4byte-code-point';

export default function is4byteCodePoint(num) {
  if (typeof num !== 'number') {
    throw new TypeError(
      String(num) +
      ' is not a number. Expected a number to check whether it\'s a code point of' +
      ' a 4-byte character or not.'
    );
  }

  return MIN_4BYTE_CODE_POINT <= num && num <= MAX_CODE_POINT;
}
