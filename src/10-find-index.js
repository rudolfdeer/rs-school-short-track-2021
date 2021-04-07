/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  let index = 0;
  let { length } = arr;
  let middle;

  while (index < length) {
    middle = Math.floor((index + length) / 2);
    if (val <= arr[middle]) {
      length = middle;
    } else {
      index = middle + 1;
    }
  }
  if (arr[index] === val) return index;
  return -1;
}

module.exports = findIndex;
