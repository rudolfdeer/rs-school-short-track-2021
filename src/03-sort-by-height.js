/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }

  newArr.sort((a, b) => b - a);

  for (let i = 0; i < res.length; i++) {
    if (res[i] !== -1) {
      res[i] = newArr.pop();
    }
  }

  return res;
}

module.exports = sortByHeight;
