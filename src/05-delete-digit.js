/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const numberStr = String(n);

  for (let i = 0; i < numberStr.length; i++) {
    arr.push(numberStr[i]);
  }

  const minEl = Math.min(...arr);
  arr.splice(arr.indexOf(String(minEl)), 1);

  return Number(arr.join(''));
}

module.exports = deleteDigit;
