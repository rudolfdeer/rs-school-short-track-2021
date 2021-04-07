/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = [];
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    num.push(str[i]);
  }

  let res = num.reduce((acc, cur) => Number(acc) + Number(cur));

  while (res > 9) {
    str = String(res);
    num = [];
    for (let i = 0; i < str.length; i++) {
      num.push(str[i]);
    }
    res = num.reduce((acc, cur) => Number(acc) + Number(cur));
  }
  return res;
}

module.exports = getSumOfDigits;
